package com.mojang.rubydung;

import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;
import org.teavm.jso.typedarrays.Uint8Array;
import org.teavm.jso.webgl.WebGLRenderingContext;
import org.teavm.jso.webgl.WebGLTexture;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

import java.util.HashMap;

import static com.mojang.rubydung.RubyDung.jsconsolelog;


public class Textures {
	private static HashMap<String, WebGLTexture> idMap = new HashMap<>();

	public static void loadTexture(WebGLRenderingContext gl, String imageUrl, int mode, TextureCallback callback) {
		HTMLImageElement img = (HTMLImageElement) HTMLDocument.current().createElement("img");
		img.setCrossOrigin("anonymous");
		img.setSrc(imageUrl);

		if (img == null){
			throw new RuntimeException("Hlllll null");
		}

		img.addEventListener("load", evt -> {
			//jsconsolelog("Hlello");
			HTMLCanvasElement canvas = (HTMLCanvasElement) HTMLDocument.current().createElement("canvas");
			canvas.setWidth(img.getWidth());
			canvas.setHeight(img.getHeight());
			CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) canvas.getContext("2d");

			if (ctx == null) {
				throw new RuntimeException("CanvasRenderingContext2D is null. WebGL rendering cannot proceed.");
			}

			ctx.drawImage(img, 0, 0);
			Uint8Array pixelData = Uint8Array.create(ctx.getImageData(0, 0, img.getWidth(), img.getHeight()).getData());

			if (pixelData == null){
				throw new RuntimeException("Hellllooooo nulllll");
			}

			WebGLTexture texture = gl.createTexture();
			gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
			gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, img.getWidth(), img.getHeight(), 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, pixelData);
			gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, mode);
			gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, mode);
			gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);

			if(gl == null){
				throw new RuntimeException("nuuullllll");
			}

			idMap.put(imageUrl, texture);
			callback.onTextureLoaded(texture);
		});

		img.addEventListener("load", evt -> {
			jsconsolelog("fail" + imageUrl);
		});


		img.addEventListener("error", evt -> {
			throw new RuntimeException("Failed to load texture from URL: " + imageUrl);
		});
	}


	// Callback interface for asynchronous texture loading
	public interface TextureCallback {
		void onTextureLoaded(WebGLTexture texture);
	}
}
