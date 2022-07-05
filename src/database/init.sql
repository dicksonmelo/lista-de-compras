CREATE TABLE IF NOT EXISTS user_app (
  id uuid DEFAULT uuid_generate_v4(),
  hash_password VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);