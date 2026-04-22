CREATE TABLE product (
     id BIGSERIAL PRIMARY KEY,
     producer_id BIGINT NOT NULL,
     name VARCHAR(255) NOT NULL,
     image_url TEXT NOT NULL,
     price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
     category VARCHAR(120) NOT NULL,
     description TEXT,
     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     CONSTRAINT fk_product_producer
         FOREIGN KEY (producer_id) REFERENCES producer(id)
);