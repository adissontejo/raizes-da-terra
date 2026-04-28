package br.ufrn.imd.rdt_api.repository;

import br.ufrn.imd.rdt_api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByProducerId(Long producerId);
    boolean existsByProducerIdAndNameIgnoreCase(Long producerId, String name);
    boolean existsByProducerIdAndNameIgnoreCaseAndIdNot(Long producerId, String name, Long id);
}

