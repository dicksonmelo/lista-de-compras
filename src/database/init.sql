CREATE TABLE IF NOT EXISTS user_app (
  id uuid DEFAULT uuid_generate_v4(),
  hash_password VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  created_at TIMESTAMP default now(),
  update_at TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS category (
  id uuid DEFAULT uuid_generate_v4(),
  category_name VARCHAR(128) NOT NULL,
  created_at TIMESTAMP default now(),
  update_at TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS list (
  id uuid DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  list_name VARCHAR(128) NOT NULL,
  created_at TIMESTAMP default now(),
  update_at TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES user_app(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS list_item (
  product_id uuid NOT NULL,
  list_id uuid NOT NULL,
  item_qtd INT,
  brand VARCHAR(40),
  created_at TIMESTAMP default now(),
  update_at TIMESTAMP,
  CONSTRAINT fk_list FOREIGN KEY (list_id) REFERENCES list(id)
);
CREATE TABLE IF NOT EXISTS product (
  id uuid DEFAULT uuid_generate_v4(),
  product_name VARCHAR(128) NOT NULL,
  category_id uuid,
  created_at TIMESTAMP default now(),
  update_at TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(id)
);