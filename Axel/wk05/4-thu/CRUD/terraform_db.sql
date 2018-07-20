CREATE DATABASE terraform_db;

CREATE TABLE world(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image_url VARCHAR(400) NOT NULL,
  description TEXT
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  content TEXT NOT NULL,
  terrian_id INTEGER NOT NULL,
  FOREIGN KEY (terrian_id),
  REFERENCES terrain (id) ON DELETE RESTRICT
);