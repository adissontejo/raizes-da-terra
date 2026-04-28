package br.ufrn.imd.rdt_api.service;

import br.ufrn.imd.rdt_api.dto.product.ProductRequestDTO;
import br.ufrn.imd.rdt_api.dto.product.ProductResponseDTO;
import br.ufrn.imd.rdt_api.entity.Product;
import br.ufrn.imd.rdt_api.entity.user.Producer;
import br.ufrn.imd.rdt_api.exception.BusinessException;
import br.ufrn.imd.rdt_api.exception.ResourceNotFoundException;
import br.ufrn.imd.rdt_api.mapper.ProductMapper;
import br.ufrn.imd.rdt_api.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final ProducerService producerService;
    private final ProductMapper mapper;

    public ProductService(ProductRepository productRepository,
                          ProducerService producerService,
                          ProductMapper mapper) {
        this.productRepository = productRepository;
        this.producerService = producerService;
        this.mapper = mapper;
    }

    public List<ProductResponseDTO> findAll() {
        return productRepository.findAll().stream()
                .map(mapper::toResponse)
                .toList();
    }

    public List<ProductResponseDTO> findAllByProducer(Long producerId) {
        producerService.verifyExists(producerId);
        return productRepository.findAllByProducerId(producerId).stream()
                .map(mapper::toResponse)
                .toList();
    }

    public ProductResponseDTO findById(Long id) {
        return productRepository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado."));
    }

    @Transactional
    public ProductResponseDTO create(ProductRequestDTO dto) {
        Producer producer = producerService.findById(dto.producerId());

        if (productRepository.existsByProducerIdAndNameIgnoreCase(dto.producerId(), dto.name())) {
            throw new BusinessException("Já existe um produto com esse nome.");
        }

        Product product = mapper.toEntity(dto, producer);
        return mapper.toResponse(productRepository.save(product));
    }

    @Transactional
    public ProductResponseDTO update(Long id, ProductRequestDTO dto) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado."));

        if (productRepository.existsByProducerIdAndNameIgnoreCaseAndIdNot(dto.producerId(), dto.name(), id)) {
            throw new BusinessException("Já existe um produto com esse nome.");
        }

        Producer producer = producerService.findById(dto.producerId());
        mapper.updateEntity(product, dto, producer);
        return mapper.toResponse(productRepository.save(product));
    }

    @Transactional
    public void delete(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ResourceNotFoundException("Produto não encontrado.");
        }
        productRepository.deleteById(id);
    }
}
