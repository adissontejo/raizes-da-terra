package br.ufrn.imd.rdt_api.dto.producer;

import java.time.LocalDateTime;

public record ProducerResponseDTO(
        Long id,
        String brandName,
        String profilePhotoUrl,
        String cnpj,
        String email,
        String phone,
        String address,
        String state,
        String city,
        String complement,
        String instagram,
        String bioPhrase,
        String bioTitle,
        String bio,
        String productsTitle,
        String productsSubtitle,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {}
