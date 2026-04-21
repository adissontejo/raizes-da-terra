CREATE TABLE user_account (
      id BIGSERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE producer (
      id BIGSERIAL PRIMARY KEY,
      user_account_id BIGINT NOT NULL UNIQUE,
      brand_name VARCHAR(255) NOT NULL,
      profile_photo_url TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_producer_user
          FOREIGN KEY (user_account_id) REFERENCES user_account(id)
);