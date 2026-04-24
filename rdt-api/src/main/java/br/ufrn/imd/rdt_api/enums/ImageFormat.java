package br.ufrn.imd.rdt_api.enums;

import br.ufrn.imd.rdt_api.exception.InvalidFileException;

import java.util.Arrays;

public enum ImageFormat {
    JPEG("image/jpeg", ".jpg"),
    PNG("image/png", ".png"),
    WEBP("image/webp", ".webp");

    private final String contentType;
    private final String extension;

    ImageFormat(String contentType, String extension) {
        this.contentType = contentType;
        this.extension = extension;
    }

    public String getContentType() {
        return contentType;
    }

    public String getExtension() {
        return extension;
    }

    public static ImageFormat fromContentType(String contentType) {
        return Arrays.stream(values())
                .filter(format -> format.contentType.equals(contentType))
                .findFirst()
                .orElseThrow(() -> new InvalidFileException("Formato de imagem inválido."));
    }
}