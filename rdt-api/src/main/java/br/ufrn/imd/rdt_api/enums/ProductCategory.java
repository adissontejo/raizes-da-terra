package br.ufrn.imd.rdt_api.enums;

public enum ProductCategory {

    QUEIJOS_ARTESANAIS("Queijos Artesanais"),
    DOCES_E_GELEIAS("Doces & Geleias"),
    CAFES_ESPECIAIS("Cafés Especiais"),
    BEBIDAS("Bebidas"),
    MEL_E_DERIVADOS("Mel & Derivados"),
    LATICINIOS("Laticínios"),
    BOLOS_E_BISCOITOS("Bolos & Biscoitos"),
    TEMPEROS_E_MOLHOS("Temperos & Molhos"),
    ARTESANATO("Artesanato"),
    FRUTAS_E_POLPAS("Frutas & Polpas"),
    OUTROS("Outros");

    private final String description;

    ProductCategory(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
