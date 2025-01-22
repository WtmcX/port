package com.mojang.rubydung.level;

import com.mojang.rubydung.Textures;
import com.mojang.rubydung.phys.AABB;
import org.teavm.jso.typedarrays.Float32Array;
import org.teavm.jso.webgl.*;

public class Chunk {
	public AABB aabb;
	public final Level level;
	public final int x0;
	public final int y0;
	public final int z0;
	public final int x1;
	public final int y1;
	public final int z1;

	private boolean dirty = true;
	private WebGLBuffer[] buffers = new WebGLBuffer[2]; // Buffers for two layers
	private WebGLTexture texture; // Chunk'e özgü texture
	private Tesselator t; // Tesselator her Chunk'e özgü
	public static int rebuiltThisFrame = 0;
	public static int updates = 0;

	private final WebGLRenderingContext gl;

	public Chunk(WebGLRenderingContext gl, Level level, int x0, int y0, int z0, int x1, int y1, int z1) {
		this.gl = gl;
		this.level = level;
		this.x0 = x0;
		this.y0 = y0;
		this.z0 = z0;
		this.x1 = x1;
		this.y1 = y1;
		this.z1 = z1;
		this.aabb = new AABB((float) x0, (float) y0, (float) z0, (float) x1, (float) y1, (float) z1);

		// WebGL buffers
		buffers[0] = gl.createBuffer();
		buffers[1] = gl.createBuffer();


		// Load texture
		Textures.loadTexture(gl, "http://localhost:8000/terrain.png", WebGLRenderingContext.LINEAR, loadedTexture -> {
			texture = loadedTexture;
		});
	}

	private void rebuild(int layer) {
		if (rebuiltThisFrame < 2) {
			this.dirty = false;
			++updates;
			++rebuiltThisFrame;

			t.init();
			int tiles = 0;

			for (int x = this.x0; x < this.x1; ++x) {
				for (int y = this.y0; y < this.y1; ++y) {
					for (int z = this.z0; z < this.z1; ++z) {
						if (this.level.isTile(x, y, z)) {
							boolean tex = y != this.level.depth * 2 / 3;
							++tiles;
							if (!tex) {
								Tile.rock.render(t, this.level, layer, x, y, z);
							} else {
								Tile.grass.render(t, this.level, layer, x, y, z);
							}
						}
					}
				}
			}

			// Upload data to WebGL buffer
			Float32Array vertexData = t.getVertexData();
			gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffers[layer]);
			gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, vertexData, WebGLRenderingContext.STATIC_DRAW);
		}
	}

	public void render(int layer) {
		// Texture yüklendi mi kontrol et
		if (texture == null) {
			return; // Texture yüklenmeden render yapmayın
		}

		if (this.dirty) {
			this.rebuild(0);
			this.rebuild(1);
		}

		// Shader programını başlat
		WebGLProgram shaderProgram = createShaderProgram(gl);  // Shader programını oluştur
		gl.useProgram(shaderProgram);  // Programı kullan

		// Bind texture
		gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);

		// Bind buffer and render it
		gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, buffers[layer]);
		gl.enableVertexAttribArray(0); // Pozisyon verilerini kullanmak için
		gl.vertexAttribPointer(0, 3, WebGLRenderingContext.FLOAT, false, 0, 0); // Pozisyonu belirtin

		// Render işlemi
		gl.drawArrays(WebGLRenderingContext.TRIANGLES, 0, t.getVertexCount());
	}

	public void setDirty() {
		this.dirty = true;
	}

	private WebGLProgram createShaderProgram(WebGLRenderingContext gl) {
		String vertexShaderSource = "attribute vec3 aPosition; " +
				"attribute vec2 aTexCoord; " +
				"uniform mat4 uModelViewMatrix; " +
				"uniform mat4 uProjectionMatrix; " +
				"varying vec2 vTexCoord; " +
				"void main() { " +
				"   gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0); " +
				"   vTexCoord = aTexCoord; " +
				"}";

		String fragmentShaderSource = "precision mediump float; " +
				"varying vec2 vTexCoord; " +
				"uniform sampler2D uTexture; " +
				"void main() { " +
				"   vec4 texColor = texture2D(uTexture, vTexCoord); " +
				"   gl_FragColor = texColor; " +
				"}";

		WebGLShader vertexShader = gl.createShader(WebGLRenderingContext.VERTEX_SHADER);
		gl.shaderSource(vertexShader, vertexShaderSource);
		gl.compileShader(vertexShader);
		if (!checkShaderCompileStatus(gl, vertexShader)) {
			System.out.println("Vertex shader compilation failed: " + gl.getShaderInfoLog(vertexShader));
		}

		WebGLShader fragmentShader = gl.createShader(WebGLRenderingContext.FRAGMENT_SHADER);
		gl.shaderSource(fragmentShader, fragmentShaderSource);
		gl.compileShader(fragmentShader);
		if (!checkShaderCompileStatus(gl, fragmentShader)) {
			System.out.println("Fragment shader compilation failed: " + gl.getShaderInfoLog(fragmentShader));
		}

		WebGLProgram shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);
		if (!checkProgramLinkStatus(gl, shaderProgram)) {
			System.out.println("Shader program link failed: " + gl.getProgramInfoLog(shaderProgram));
		}

		gl.useProgram(shaderProgram);

		return shaderProgram;
	}

	// Shader compile durumunu kontrol et
	private boolean checkShaderCompileStatus(WebGLRenderingContext gl, WebGLShader shader) {
		// Shader compile durumu kontrolü
		return Boolean.valueOf(gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS).toString());
	}

	// Program link durumunu kontrol et
	private boolean checkProgramLinkStatus(WebGLRenderingContext gl, WebGLProgram program) {
		// Program link durumu kontrolü
		return Boolean.valueOf(gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS).toString());
	}


}
