package br.ufrn.imd.rdt_api.controller;

import br.ufrn.imd.rdt_api.dto.ApiResponse;
import br.ufrn.imd.rdt_api.dto.product.ProductRequestDTO;
import br.ufrn.imd.rdt_api.dto.product.ProductResponseDTO;
import br.ufrn.imd.rdt_api.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductResponseDTO>>> findAll() {
        return ResponseEntity.ok(ApiResponse.ok(service.findAll()));
    }

    @GetMapping("/producer/{producerId}")
    public ResponseEntity<ApiResponse<List<ProductResponseDTO>>> findByProducer(@PathVariable Long producerId) {
        return ResponseEntity.ok(ApiResponse.ok(service.findAllByProducer(producerId)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductResponseDTO>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(service.findById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProductResponseDTO>> create(@Valid @RequestBody ProductRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Produto criado com sucesso.", service.create(dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductResponseDTO>> update(@PathVariable Long id,
                                                                   @Valid @RequestBody ProductRequestDTO dto) {
        return ResponseEntity.ok(ApiResponse.ok("Produto atualizado com sucesso.", service.update(id, dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.noContent("Produto removido com sucesso."));
    }
}

