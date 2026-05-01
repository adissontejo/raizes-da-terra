package br.ufrn.imd.rdt_api.service;

import br.ufrn.imd.rdt_api.dto.producer.ProducerRequestDTO;
import br.ufrn.imd.rdt_api.dto.producer.ProducerResponseDTO;
import br.ufrn.imd.rdt_api.entity.user.Producer;
import br.ufrn.imd.rdt_api.mapper.ProducerMapper;
import br.ufrn.imd.rdt_api.exception.ResourceNotFoundException;
import br.ufrn.imd.rdt_api.repository.ProducerRepository;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProducerService {

    private final ProducerRepository producerRepository;
    private final ProducerMapper mapper;

    public ProducerService(ProducerRepository producerRepository, ProducerMapper mapper) {
        this.producerRepository = producerRepository;
        this.mapper = mapper;
    }

    public List<ProducerResponseDTO> findAll() {
        return producerRepository.findAll().stream()
                .map(mapper::toResponse)
                .toList();
    }

    public Producer findById(Long id) {
        return producerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produtor não encontrado."));
    }

    @Transactional
    public ProducerResponseDTO create(ProducerRequestDTO dto) {
        Producer producer = mapper.toEntity(dto);
        return mapper.toResponse(producerRepository.save(producer));
    }

    @Transactional
    public ProducerResponseDTO update(Long id, ProducerRequestDTO dto) {
        Producer existingProducer = producerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produtor não encontrado."));

        mapper.updateEntity(existingProducer, dto);
        Producer updatedProducer = producerRepository.save(existingProducer);
        return mapper.toResponse(updatedProducer);
    }

    @Transactional
    public void delete(Long id) {
        if (!producerRepository.existsById(id)) {
            throw new ResourceNotFoundException("Produtor não encontrado.");
        }
        producerRepository.deleteById(id);
    }


    public void verifyExists(Long id) {
        if (!producerRepository.existsById(id)) {
            throw new ResourceNotFoundException("Produtor não encontrado.");
        }
    }
}

