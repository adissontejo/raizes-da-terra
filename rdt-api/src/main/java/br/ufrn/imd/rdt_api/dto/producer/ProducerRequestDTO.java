package br.ufrn.imd.rdt_api.dto.producer;

import jakarta.validation.constraints.*;

public class ProducerRequestDTO {
    @NotBlank(message = "O nome da marca é obrigatório.")
    @Size(max = 255, message = "O nome da marca deve ter no máximo 255 caracteres.")
    private String brandName;

    @NotBlank(message = "A foto de perfil é obrigatória.")
    private String profilePhotoUrl;

    @NotBlank(message = "A foto de capa é obrigatória.")
    private String bannerUrl;

    @NotBlank(message = "O CNPJ é obrigatório.")
    @Pattern(regexp = "\\d{14}", message = "O CNPJ deve conter exatamente 14 dígitos numéricos.")
    private String cnpj;

    @NotBlank(message = "O email é obrigatório.")
    @Email(message = "O email deve ser válido.")
    private String email;

    @NotBlank(message = "O telefone é obrigatório.")
    @Pattern(regexp = "\\d{10,11}", message = "O telefone deve conter 10 ou 11 dígitos numéricos.")
    private String phone;

    @NotBlank(message = "O endereço é obrigatório.")
    private String address;
}
