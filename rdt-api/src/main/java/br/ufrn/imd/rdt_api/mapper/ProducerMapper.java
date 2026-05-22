package br.ufrn.imd.rdt_api.mapper;

import br.ufrn.imd.rdt_api.dto.producer.ProducerRequestDTO;
import br.ufrn.imd.rdt_api.dto.producer.ProducerResponseDTO;
import br.ufrn.imd.rdt_api.entity.user.Producer;
import org.springframework.stereotype.Component;

@Component
public class ProducerMapper {

    public ProducerResponseDTO toResponse(Producer producer) {
        return new ProducerResponseDTO(
                producer.getId(),
                producer.getBrandName(),
                producer.getProfilePhotoUrl(),
                producer.getCnpj(),
                producer.getEmail(),
                producer.getPhone(),
                producer.getAddress(),
                producer.getState(),
                producer.getCity(),
                producer.getComplement(),
                producer.getInstagram(),
                producer.getBioPhrase(),
                producer.getBioTitle(),
                producer.getBio(),
                producer.getProductsTitle(),
                producer.getProductsSubtitle(),
                producer.getCreatedAt(),
                producer.getUpdatedAt()
        );
    }

    public Producer toEntity(ProducerRequestDTO dto) {
        Producer producer = new Producer();
        producer.setBrandName(dto.brandName());
        producer.setProfilePhotoUrl(dto.profilePhotoUrl());
        producer.setCnpj(dto.cnpj());
        producer.setEmail(dto.email());
        producer.setPhone(dto.phone());
        producer.setAddress(dto.address());
        producer.setState(dto.state());
        producer.setCity(dto.city());
        producer.setComplement(dto.complement());
        producer.setInstagram(dto.instagram());
        producer.setBioPhrase(dto.bioPhrase());
        producer.setBioTitle(dto.bioTitle());
        producer.setBio(dto.bio());
        producer.setProductsTitle(dto.productsTitle());
        producer.setProductsSubtitle(dto.productsSubtitle());
        return producer;
    }

    public void updateEntity(Producer producer, ProducerRequestDTO dto) {
        producer.setBrandName(dto.brandName());
        producer.setProfilePhotoUrl(dto.profilePhotoUrl());
        producer.setCnpj(dto.cnpj());
        producer.setEmail(dto.email());
        producer.setPhone(dto.phone());
        producer.setAddress(dto.address());
        producer.setState(dto.state());
        producer.setCity(dto.city());
        producer.setComplement(dto.complement());
        producer.setInstagram(dto.instagram());
        producer.setBioPhrase(dto.bioPhrase());
        producer.setBioTitle(dto.bioTitle());
        producer.setBio(dto.bio());
        producer.setProductsTitle(dto.productsTitle());
        producer.setProductsSubtitle(dto.productsSubtitle());
    }
}
