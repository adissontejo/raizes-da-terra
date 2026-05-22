package br.ufrn.imd.rdt_api.repository;

import br.ufrn.imd.rdt_api.entity.user.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerRepository extends JpaRepository<Producer, Long> {

    boolean existsByEmail(String email);

    boolean existsByCnpj(String cnpj);

    boolean existsByEmailAndIdNot(String email, Long id);

    boolean existsByCnpjAndIdNot(String cnpj, Long id);
}

