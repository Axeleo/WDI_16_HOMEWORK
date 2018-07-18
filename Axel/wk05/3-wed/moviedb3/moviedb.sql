CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  director VARCHAR(200),
  metascore VARCHAR(200),
  actors VARCHAR(400),
  genre VARCHAR(200),
  poster VARCHAR(200),
  released VARCHAR(200),
  plot TEXT
);

