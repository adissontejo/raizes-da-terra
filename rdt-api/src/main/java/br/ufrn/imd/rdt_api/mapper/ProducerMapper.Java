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
                /*producer.getCnpj(),
                producer.getEmail(),
                producer.getPhone(),
                producer.getAddress(),*/
                producer.getCreatedAt(),
                producer.getUpdatedAt()
        );
    }

    public Producer toEntity(ProducerRequestDTO dto) {
        Producer producer = new Producer();
        producer.setBrandName(dto.brandName());
        producer.setProfilePhotoUrl(dto.profilePhotoUrl());
        return producer;
    }

    public void updateEntity(Producer producer, ProducerRequestDTO dto) {
        producer.setBrandName(dto.brandName());
        producer.setProfilePhotoUrl(dto.profilePhotoUrl());
    }
}