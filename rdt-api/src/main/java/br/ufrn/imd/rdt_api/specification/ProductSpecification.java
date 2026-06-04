package br.ufrn.imd.rdt_api.specification;

import br.ufrn.imd.rdt_api.entity.Product;
import br.ufrn.imd.rdt_api.enums.ProductCategory;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ProductSpecification {

    public static Specification<Product> nameContains(String name) {
        return (root, query, cb) -> {
            if (name == null || name.isBlank()) {
                return cb.conjunction();
            }
            return cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%");
        };
    }

    public static Specification<Product> categoriesIn(List<ProductCategory> categories) {
        return (root, query, cb) -> {
            if (categories == null || categories.isEmpty()) {
                return cb.conjunction();
            }
            return root.get("category").in(categories);
        };
    }

    public static Specification<Product> withFilters(String name, List<ProductCategory> categories) {
        return Specification
                .where(nameContains(name))
                .and(categoriesIn(categories));
    }
}
