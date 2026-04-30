package br.ufrn.imd.rdt_api.dto.producer;

import jakarta.validation.constraints.*;

public class ProducerRequestDTO {
    @NotBlank(message = "O nome da marca é obrigatório.")
    @Size(max = 255, message = "O nome da marca deve ter no máximo 255 caracteres.")
    private String brandName;

    @NotBlank(message = "A foto de perfil é obrigatória.")
    private String profilePhotoUrl;
}
