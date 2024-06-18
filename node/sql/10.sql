CREATE TABLE user_info_00 (
  viewer_id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  create_time datetime DEFAULT NULL
);

INSERT INTO user_info_00 values (1,"masaya","aaa@gmail.com", NOW());