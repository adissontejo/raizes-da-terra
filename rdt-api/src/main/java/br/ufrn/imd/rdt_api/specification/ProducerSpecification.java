package br.ufrn.imd.rdt_api.specification;

import br.ufrn.imd.rdt_api.entity.user.Producer;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ProducerSpecification {

    public static Specification<Producer> search(String term) {
        return (root, query, cb) -> {
            if (term == null || term.isBlank()) {
                return cb.conjunction();
            }

            String pattern = "%" + term.toLowerCase() + "%";

            List<Predicate> predicates = new ArrayList<>();

            predicates.add(cb.like(cb.lower(root.get("brandName")), pattern));
            predicates.add(cb.like(cb.lower(root.get("bio")), pattern));
            predicates.add(cb.like(cb.lower(root.get("bioPhrase")), pattern));
            predicates.add(cb.like(cb.lower(root.get("bioTitle")), pattern));

            return cb.or(predicates.toArray(new Predicate[0]));
        };
    }
}
