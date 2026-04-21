package br.ufrn.imd.rdt_api.dto;

import java.time.ZonedDateTime;
import java.util.List;

public record ApiError(
        ZonedDateTime timestamp,
        Integer status,
        String error,
        String message,
        String path,
        List<FieldError> fields
) {
    public record FieldError(String field, String message) {}

    public static ApiError of(Integer status, String error, String message, String path) {
        return new ApiError(ZonedDateTime.now(), status, error, message, path, null);
    }

    public static ApiError of(Integer status, String error, String message, String path, List<FieldError> fields) {
        return new ApiError(ZonedDateTime.now(), status, error, message, path, fields);
    }
}


