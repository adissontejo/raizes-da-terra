package br.ufrn.imd.rdt_api.controller;
import br.ufrn.imd.rdt_api.dto.ApiResponse;
import br.ufrn.imd.rdt_api.dto.producer.ProducerRequestDTO;
import br.ufrn.imd.rdt_api.dto.producer.ProducerResponseDTO;
import br.ufrn.imd.rdt_api.entity.user.Producer;
import br.ufrn.imd.rdt_api.mapper.ProducerMapper;
import br.ufrn.imd.rdt_api.repository.ProducerRepository;
import br.ufrn.imd.rdt_api.service.ProducerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;  

import java.util.List;

@RestController
@RequestMapping("/api/producers")
public class ProducerController {
    private final ProducerService service;

    public ProducerController(ProducerService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProducerResponseDTO>>> findAll() {
        return ResponseEntity.ok(ApiResponse.ok(service.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Producer>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProducerResponseDTO>> create(@Valid @RequestBody ProducerRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Produtor criado com sucesso.", service.create(dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ProducerResponseDTO>> update(@PathVariable Long id,
                                                                   @Valid @RequestBody ProducerRequestDTO dto) {
        return ResponseEntity.ok(ApiResponse.ok("Produtor atualizado com sucesso.", service.update(id, dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.noContent("Produtor removido com sucesso."));
    }
}
