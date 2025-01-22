package com.demez.minecraft.Client;

import java.nio.FloatBuffer;

public class Matrix4f extends Matrix {
    private float[] elements = new float[16]; // 4x4 matris için 16 eleman

    public Matrix4f() {
        setIdentity();
    }

    @Override
    public Matrix setIdentity() {
        elements[0] = 1.0f;
        elements[1] = 0.0f;
        elements[2] = 0.0f;
        elements[3] = 0.0f;

        elements[4] = 0.0f;
        elements[5] = 1.0f;
        elements[6] = 0.0f;
        elements[7] = 0.0f;

        elements[8] = 0.0f;
        elements[9] = 0.0f;
        elements[10] = 1.0f;
        elements[11] = 0.0f;

        elements[12] = 0.0f;
        elements[13] = 0.0f;
        elements[14] = 0.0f;
        elements[15] = 1.0f;

        return this;
    }

    @Override
    public Matrix invert() {
        return null;
    }

    public float[] getElements() {
        return elements;
    }

    @Override
    public Matrix load(FloatBuffer buf) {
        return null;
    }

    @Override
    public Matrix loadTranspose(FloatBuffer buf) {
        return null;
    }

    @Override
    public Matrix negate() {
        return null;
    }

    @Override
    public Matrix store(FloatBuffer buf) {
        return null;
    }

    @Override
    public Matrix storeTranspose(FloatBuffer buf) {
        return null;
    }

    @Override
    public Matrix transpose() {
        return null;
    }

    @Override
    public Matrix setZero() {
        return null;
    }

    @Override
    public float determinant() {
        return 0;
    }

    public Matrix4f rotateM(float angle, float x, float y, float z) {
        // Dönüşüm matrisini Y ekseninde döndürmek için hesaplama
        float cos = (float) Math.cos(Math.toRadians(angle));
        float sin = (float) Math.sin(Math.toRadians(angle));

        // Geçici bir döndürme matrisi oluştur
        float[] rotationMatrix = new float[16];
        rotationMatrix[0] = cos + (1 - cos) * x * x;
        rotationMatrix[1] = (1 - cos) * x * y - sin * z;
        rotationMatrix[2] = (1 - cos) * x * z + sin * y;
        rotationMatrix[3] = 0;

        rotationMatrix[4] = (1 - cos) * y * x + sin * z;
        rotationMatrix[5] = cos + (1 - cos) * y * y;
        rotationMatrix[6] = (1 - cos) * y * z - sin * x;
        rotationMatrix[7] = 0;

        rotationMatrix[8] = (1 - cos) * z * x - sin * y;
        rotationMatrix[9] = (1 - cos) * z * y + sin * x;
        rotationMatrix[10] = cos + (1 - cos) * z * z;
        rotationMatrix[11] = 0;

        rotationMatrix[12] = 0;
        rotationMatrix[13] = 0;
        rotationMatrix[14] = 0;
        rotationMatrix[15] = 1;

        // Dönüşümü mevcut matrisle çarp
        return multiply(rotationMatrix);
    }

    public Matrix4f multiply(float[] otherMatrix) {
        float[] result = new float[16];

        // Matris çarpımı: 4x4 * 4x4
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                result[i * 4 + j] = elements[i * 4 + 0] * otherMatrix[0 * 4 + j]
                        + elements[i * 4 + 1] * otherMatrix[1 * 4 + j]
                        + elements[i * 4 + 2] * otherMatrix[2 * 4 + j]
                        + elements[i * 4 + 3] * otherMatrix[3 * 4 + j];
            }
        }

        // Sonuçları mevcut elemana kopyala
        elements = result;
        return this;
    }

    // Diğer matrisi işlemlerini (inverse, transpose vb.) burada ekleyebilirsiniz.
}
