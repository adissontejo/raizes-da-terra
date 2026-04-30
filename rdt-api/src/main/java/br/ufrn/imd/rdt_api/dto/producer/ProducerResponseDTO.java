package br.ufrn.imd.rdt_api.dto.producer;

import java.time.LocalDateTime;

public record ProducerResponseDTO(
        Long id,
        String brandName,
        String profilePhotoUrl,
        String bannerUrl,
        String cnpj,
        String email,
        String phone,
        String address,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {}