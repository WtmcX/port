package com.mojang.rubydung;

import org.lwjgl.BufferUtils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;

import static org.lwjgl.opengl.GL11.*;

public class Textures {

    private static int lastId = Integer.MIN_VALUE;

    /**
     * Load a texture into OpenGL
     *
     * @param resourceName Resource path of the image (must be raw RGBA format)
     * @param width        Texture width
     * @param height       Texture height
     * @param mode         Texture filter mode (GL_NEAREST, GL_LINEAR)
     * @return Texture id of OpenGL
     */
    public static int loadTexture(String resourceName, int width, int height, int mode) {
        // Generate a new texture id
        int id = glGenTextures();

        // Bind this texture id
        bind(id);

        // Set texture filter mode
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, mode);
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, mode);

        // Load raw RGBA data from resource
        ByteBuffer pixelBuffer = readTextureData(resourceName, width, height);

        // Upload texture to OpenGL
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, pixelBuffer);

        return id;
    }

    /**
     * Bind the texture to OpenGL using the id from {@link #loadTexture(String, int, int, int)}
     *
     * @param id Texture id
     */
    public static void bind(int id) {
        if (id != lastId) {
            glBindTexture(GL_TEXTURE_2D, id);
            lastId = id;
        }
    }

    /**
     * Reads texture data from a resource file.
     *
     * @param resourceName Resource path
     * @param width        Expected texture width
     * @param height       Expected texture height
     * @return A ByteBuffer containing the texture data
     */
    private static ByteBuffer readTextureData(String resourceName, int width, int height) {
        try (InputStream inputStream = Textures.class.getResourceAsStream(resourceName)) {
            if (inputStream == null) {
                throw new IOException("Resource not found: " + resourceName);
            }

            // Calculate the expected size of the texture (RGBA format: 4 bytes per pixel)
            int expectedSize = width * height * 4;
            byte[] pixelData = new byte[expectedSize];

            // Read the image data into the array
            int bytesRead = inputStream.read(pixelData);
            if (bytesRead != expectedSize) {
                throw new IOException("Invalid texture data size: expected " + expectedSize + ", but got " + bytesRead);
            }

            // Wrap the pixel data in a ByteBuffer
            ByteBuffer buffer = BufferUtils.createByteBuffer(expectedSize);
            buffer.put(pixelData);
            buffer.flip(); // Prepare the buffer for reading

            return buffer;
        } catch (IOException e) {
            throw new RuntimeException("Failed to load texture: " + resourceName, e);
        }
    }
}
