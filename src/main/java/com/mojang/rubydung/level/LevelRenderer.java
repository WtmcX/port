package com.mojang.rubydung.level;

import com.mojang.rubydung.HitResult;
import com.mojang.rubydung.Player;
import com.mojang.rubydung.phys.AABB;
import net.lax1dude.eaglercraft.adapter.GL11;
import org.teavm.jso.webgl.WebGLRenderingContext;

public class LevelRenderer implements LevelListener {
	private static final int CHUNK_SIZE = 16;
	private Level level;
	private Chunk[] chunks;
	private int xChunks;
	private int yChunks;
	private int zChunks;
	private Tesselator t;
	private final WebGLRenderingContext gl;

	public LevelRenderer(WebGLRenderingContext gl, Level level) {
		this.gl = gl;
		this.t = new Tesselator(gl);
		this.level = level;
		level.addListener(this);
		this.xChunks = level.width / CHUNK_SIZE;
		this.yChunks = level.depth / CHUNK_SIZE;
		this.zChunks = level.height / CHUNK_SIZE;
		this.chunks = new Chunk[this.xChunks * this.yChunks * this.zChunks];

		for (int x = 0; x < this.xChunks; ++x) {
			for (int y = 0; y < this.yChunks; ++y) {
				for (int z = 0; z < this.zChunks; ++z) {
					int x0 = x * CHUNK_SIZE;
					int y0 = y * CHUNK_SIZE;
					int z0 = z * CHUNK_SIZE;
					int x1 = Math.min((x + 1) * CHUNK_SIZE, level.width);
					int y1 = Math.min((y + 1) * CHUNK_SIZE, level.depth);
					int z1 = Math.min((z + 1) * CHUNK_SIZE, level.height);
					this.chunks[(x + y * this.xChunks) * this.zChunks + z] = new Chunk(gl, level, x0, y0, z0, x1, y1, z1);
				}
			}
		}
	}

	public void render(Player player, int layer) {
		Chunk.rebuiltThisFrame = 0;
		Frustum frustum = Frustum.getFrustum();

		for (Chunk chunk : this.chunks) {
			if (frustum.cubeInFrustum(chunk.aabb)) {
				chunk.render(layer);
			}
		}
	}

	public void pick(Player player) {
		// Işın parametreleri
		float rayLength = 3.0f; // Maksimum ışın uzunluğu
		float step = 0.1f;      // Işın kontrol adımı
		float x = player.x;
		float y = player.y + player.height / 2.0f; // Oyuncunun göz yüksekliği
		float z = player.z;

		// Oyuncunun bakış yönü
		float dx = (float) Math.cos(Math.toRadians(player.yRot)) * (float) Math.cos(Math.toRadians(player.xRot));
		float dy = (float) Math.sin(Math.toRadians(player.xRot));
		float dz = (float) Math.sin(Math.toRadians(player.yRot)) * (float) Math.cos(Math.toRadians(player.xRot));

		// Işın boyunca ilerleyin
		for (float t = 0; t < rayLength; t += step) {
			int blockX = (int) Math.floor(x + dx * t);
			int blockY = (int) Math.floor(y + dy * t);
			int blockZ = (int) Math.floor(z + dz * t);

			// Blok var mı kontrol et
			if (level.isSolidTile(blockX, blockY, blockZ)) {
				// Blok bulundu, HitResult döndür
				HitResult hit = new HitResult(blockX, blockY, blockZ, 0, (int) t);
				player.setHitResult(hit);
				return;
			}
		}

		// Hiçbir blok bulunamadı
		player.setHitResult(null);
	}


	public void renderHit(HitResult h) {
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE);
		GL11.glColor4f(1.0F, 1.0F, 1.0F, (float)Math.sin((double)System.currentTimeMillis() / 100.0D) * 0.2F + 0.4F);
		this.t.init();
		Tile.rock.renderFace(this.t, h.x, h.y, h.z, h.f);
		this.t.flush();
		GL11.glDisable(GL11.GL_BLEND);
	}

	public void setDirty(int x0, int y0, int z0, int x1, int y1, int z1) {
		x0 /= CHUNK_SIZE;
		x1 /= CHUNK_SIZE;
		y0 /= CHUNK_SIZE;
		y1 /= CHUNK_SIZE;
		z0 /= CHUNK_SIZE;
		z1 /= CHUNK_SIZE;

		x0 = Math.max(0, x0);
		y0 = Math.max(0, y0);
		z0 = Math.max(0, z0);

		x1 = Math.min(this.xChunks - 1, x1);
		y1 = Math.min(this.yChunks - 1, y1);
		z1 = Math.min(this.zChunks - 1, z1);

		for (int x = x0; x <= x1; ++x) {
			for (int y = y0; y <= y1; ++y) {
				for (int z = z0; z <= z1; ++z) {
					this.chunks[(x + y * this.xChunks) * this.zChunks + z].setDirty();
				}
			}
		}
	}

	public void tileChanged(int x, int y, int z) {
		this.setDirty(x - 1, y - 1, z - 1, x + 1, y + 1, z + 1);
	}

	public void lightColumnChanged(int x, int z, int y0, int y1) {
		this.setDirty(x - 1, y0 - 1, z - 1, x + 1, y1 + 1, z + 1);
	}

	public void allChanged() {
		this.setDirty(0, 0, 0, this.level.width, this.level.depth, this.level.height);
	}
}
