package br.ufrn.imd.rdt_api.repository;

import br.ufrn.imd.rdt_api.entity.user.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerRepository extends JpaRepository<Producer, Long> {
}

