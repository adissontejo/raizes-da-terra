package br.ufrn.imd.rdt_api.service;

import br.ufrn.imd.rdt_api.entity.user.Producer;
import br.ufrn.imd.rdt_api.exception.ResourceNotFoundException;
import br.ufrn.imd.rdt_api.repository.ProducerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProducerService {

    private final ProducerRepository repository;

    public ProducerService(ProducerRepository repository) {
        this.repository = repository;
    }

    public Producer findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produtor não encontrado."));
    }

    public void verifyExists(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Produtor não encontrado.");
        }
    }
}

