package com.mojang.rubydung;

import com.demez.minecraft.Client.Matrix;
import com.demez.minecraft.Client.Matrix4f;
import com.mojang.rubydung.level.Chunk;
import com.mojang.rubydung.level.Level;
import com.mojang.rubydung.level.LevelRenderer;
import org.teavm.jso.JSBody;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.typedarrays.Float32Array;
import org.teavm.jso.typedarrays.Int16Array;
import org.teavm.jso.webgl.*;

public class RubyDung implements Runnable {
	private int width;
	private int height;
	private Level level;
	private LevelRenderer levelRenderer;
	private Player player;
	private boolean isCloseRequested = false;
	public static RubyDung instance = new RubyDung();
	private float angle = 0.0f; // Küpün döneceği açı

	private WebGLRenderingContext gl;

	@JSBody(params = { "message" }, script = "alert(message)")
	public static native void jsalert(String message);

	@JSBody(params = { "message" }, script = "console.log(message)")
	public static native void jsconsolelog(String message);

	public void init() {
		jsconsolelog("Starting Minecraft RD-132211");

		// HTML5 Canvas ve WebGL bağlamı oluştur
		HTMLCanvasElement canvas = HTMLDocument.current().createElement("canvas").cast();
		canvas.setWidth(800);
		canvas.setHeight(600);
		HTMLDocument.current().getBody().appendChild(canvas);

		gl = (WebGLRenderingContext) canvas.getContext("webgl");
		if (HTMLDocument.current() == null) {
			jsconsolelog("HTMLDocument.current() is null!");
		}
		if (canvas.getContext("webgl") == null) {
			jsconsolelog("WebGL context could not be initialized!");
		}


		width = canvas.getWidth();
		height = canvas.getHeight();

		// OpenGL benzeri ayarları yap
		gl.clearColor(0.5f, 0.8f, 1.0f, 1.0f);
		gl.enable(WebGLRenderingContext.DEPTH_TEST);
		gl.depthFunc(WebGLRenderingContext.LEQUAL);

		// Level ve Renderer başlat
		level = new Level(256, 256, 64);
		levelRenderer = new LevelRenderer(gl, level);
		player = new Player(level);

		if (level == null) {
			jsconsolelog("Level initialization failed!");
		}
		if (levelRenderer == null) {
			jsconsolelog("LevelRenderer initialization failed!");
		}


		jsconsolelog("Initialization complete");
	}

	public void destroy() {
		level.save();
		isCloseRequested = true;
		jsalert("The game tried to close itself. Reload the page to restart.");
	}

	public void run() {
		try {
			init();

			while (!isCloseRequested) {
				tick();
				render();
				Thread.sleep(16); // 60 FPS'ye yakın bir hızla bekleme yapıyoruz
			}
		} catch (Exception e) {
			e.printStackTrace();
			jsalert("Error: " + e.getMessage());
		}
	}

	public static RubyDung getInstance() {
		return instance;
	}

	private void tick() {
		player.tick();
	}



	private WebGLProgram program;

	private void setupShaders() {
		String vertexShaderSource =
				"attribute vec3 a_position;\n" +
						"uniform mat4 u_rotationMatrix; // Dönüşüm matrisi uniform olarak tanımlandı" +
						"void main() {" +
						"    gl_Position = u_rotationMatrix * vec4(a_position, 1.0);" +
						"}";

		String fragmentShaderSource =
				"void main() {" +
						"    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);" + // Kırmızı renk
						"}";

		WebGLShader vertexShader = gl.createShader(WebGLRenderingContext.VERTEX_SHADER);
		gl.shaderSource(vertexShader, vertexShaderSource);
		gl.compileShader(vertexShader);
		if (!gl.getShaderParameterb(vertexShader, WebGLRenderingContext.COMPILE_STATUS)) {
			jsconsolelog("Vertex shader compilation failed: " + gl.getShaderInfoLog(vertexShader));
		}

		WebGLShader fragmentShader = gl.createShader(WebGLRenderingContext.FRAGMENT_SHADER);
		gl.shaderSource(fragmentShader, fragmentShaderSource);
		gl.compileShader(fragmentShader);
		if (!gl.getShaderParameterb(fragmentShader, WebGLRenderingContext.COMPILE_STATUS)) {
			jsconsolelog("Fragment shader compilation failed: " + gl.getShaderInfoLog(fragmentShader));
		}

		program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		if (!gl.getProgramParameterb(program, WebGLRenderingContext.LINK_STATUS)) {
			jsconsolelog("Shader program linking failed: " + gl.getProgramInfoLog(program));
		}
	}

	private void render() {
		if (program == null) {
			setupShaders();
		}

		gl.useProgram(program);

		// Küpün 8 köşe koordinatları
		float[] vertices = {
				-0.5f, -0.5f, 0.5f,  // 0
				0.5f, -0.5f, 0.5f,  // 1
				0.5f, 0.5f, 0.5f,  // 2
				-0.5f, 0.5f, 0.5f,  // 3
				-0.5f, -0.5f, -0.5f,  // 4
				0.5f, -0.5f, -0.5f,  // 5
				0.5f, 0.5f, -0.5f,  // 6
				-0.5f, 0.5f, -0.5f   // 7
		};

		short[] indices = {
				0, 1, 2, 2, 3, 0,  // Ön yüz
				4, 5, 6, 6, 7, 4,  // Arka yüz
				0, 1, 5, 5, 4, 0,  // Alt yüz
				2, 3, 7, 7, 6, 2,  // Üst yüz
				0, 3, 7, 7, 4, 0,  // Sol yüz
				1, 2, 6, 6, 5, 1   // Sağ yüz
		};

		// Vertex buffer oluştur ve veri yükle
		WebGLBuffer vertexBuffer = gl.createBuffer();
		gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, vertexBuffer);
		Float32Array vertexData = Float32Array.create(vertices.length);
		for (int i = 0; i < vertices.length; i++) {
			vertexData.set(i, vertices[i]);
		}
		gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, vertexData, WebGLRenderingContext.STATIC_DRAW);

		// Index buffer oluştur ve veri yükle
		WebGLBuffer indexBuffer = gl.createBuffer();
		gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexBuffer);
		Int16Array indexData = Int16Array.create(indices.length);
		for (int i = 0; i < indices.length; i++) {
			indexData.set(i, indices[i]);
		}
		gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indexData, WebGLRenderingContext.STATIC_DRAW);

		// Shader değişkenlerini bağla
		int positionLocation = gl.getAttribLocation(program, "a_position");
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 3, WebGLRenderingContext.FLOAT, false, 0, 0);

		// Model dönüşüm matrisini shader'a gönder
		// Matris verilerini shader'a iletmek için Float32Array kullanıyoruz
		float[] rotationMatrix = new float[16]; // Dönüşüm matrisini tutacak dizi
		Matrix4f matrix = new Matrix4f(); // Yeni bir Matrix4f nesnesi oluşturuyoruz
		matrix.setIdentity();  // Başlangıç olarak kimlik matrisini ayarlıyoruz
		matrix.rotateM(angle, 0.0f, 1.0f, 0.0f); // Y ekseninde döndürme uygula

// rotationMatrix'i matrisin elemanları ile dolduruyoruz
		float[] elements = matrix.getElements();
		for (int i = 0; i < 16; i++) {
			rotationMatrix[i] = elements[i];
		}

// Shader'a dönüşüm matrisini göndermek için uniformLocation elde et
		WebGLUniformLocation matrixLocation = gl.getUniformLocation(program, "u_rotationMatrix");

// Shader'da dönüşüm matrisini uniform olarak gönder
		gl.uniformMatrix4fv(matrixLocation, false, Float32Array.create(rotationMatrix));


		// Ekranı temizle ve geometriyi çiz
		gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
		gl.drawElements(WebGLRenderingContext.TRIANGLES, indices.length, WebGLRenderingContext.UNSIGNED_SHORT, 0);

		// Küpü döndürmek için açıyı güncelle
		angle += 1.0f;
		if (angle >= 360.0f) {
			angle -= 360.0f;
		}
	}


	public static void main (String[]args){
		new Thread(new RubyDung()).start();
	}
}

