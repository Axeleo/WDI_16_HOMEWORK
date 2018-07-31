CREATE DATABASE terraform_db;

CREATE TABLE terrains(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image_url VARCHAR(400) NOT NULL,
  description TEXT
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  content TEXT NOT NULL,
  terrain_id INTEGER NOT NULL,
  FOREIGN KEY (terrain_id)
  REFERENCES terrains (id) ON DELETE RESTRICT
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
);
