package br.ufrn.imd.rdt_api.dto.product;

import br.ufrn.imd.rdt_api.enums.ProductCategory;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record ProductResponseDTO(
        Long id,
        Long producerId,
        String producerBrandName,
        String name,
        String imageUrl,
        BigDecimal price,
        ProductCategory category,
        String description,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {}

