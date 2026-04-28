package br.ufrn.imd.rdt_api.mapper;

import br.ufrn.imd.rdt_api.dto.product.ProductRequestDTO;
import br.ufrn.imd.rdt_api.dto.product.ProductResponseDTO;
import br.ufrn.imd.rdt_api.entity.Product;
import br.ufrn.imd.rdt_api.entity.user.Producer;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public ProductResponseDTO toResponse(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getProducer().getId(),
                product.getProducer().getBrandName(),
                product.getName(),
                product.getImageUrl(),
                product.getPrice(),
                product.getCategory(),
                product.getDescription(),
                product.getCreatedAt(),
                product.getUpdatedAt()
        );
    }

    public Product toEntity(ProductRequestDTO dto, Producer producer) {
        Product product = new Product();
        product.setProducer(producer);
        product.setName(dto.name());
        product.setImageUrl(dto.imageUrl());
        product.setPrice(dto.price());
        product.setCategory(dto.category());
        product.setDescription(dto.description());
        return product;
    }

    public void updateEntity(Product product, ProductRequestDTO dto, Producer producer) {
        product.setProducer(producer);
        product.setName(dto.name());
        product.setImageUrl(dto.imageUrl());
        product.setPrice(dto.price());
        product.setCategory(dto.category());
        product.setDescription(dto.description());
    }
}
