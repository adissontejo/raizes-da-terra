package br.ufrn.imd.rdt_api.dto.product;

import br.ufrn.imd.rdt_api.enums.ProductCategory;
import jakarta.validation.constraints.*;

import java.math.BigDecimal;

public record ProductRequestDTO(

        @NotNull(message = "Informe o produtor.")
        Long producerId,

        @NotBlank(message = "O nome do produto é obrigatório.")
        @Size(max = 255, message = "O nome deve ter no máximo 255 caracteres.")
        String name,

        @NotBlank(message = "A imagem do produto é obrigatória.")
        String imageUrl,

        @NotNull(message = "O preço é obrigatório.")
        @DecimalMin(value = "0.0", inclusive = true, message = "O preço não pode ser negativo.")
        @Digits(integer = 8, fraction = 2, message = "Formato de preço inválido.")
        BigDecimal price,

        @NotNull(message = "Selecione uma categoria.")
        ProductCategory category,

        String description
) {}
