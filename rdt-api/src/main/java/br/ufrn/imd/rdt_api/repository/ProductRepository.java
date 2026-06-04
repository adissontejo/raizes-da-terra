package br.ufrn.imd.rdt_api.repository;

import br.ufrn.imd.rdt_api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    List<Product> findAllByProducerId(Long producerId);
    boolean existsByProducerIdAndNameIgnoreCase(Long producerId, String name);
    boolean existsByProducerIdAndNameIgnoreCaseAndIdNot(Long producerId, String name, Long id);
}

