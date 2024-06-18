CREATE TABLE user_info_01 (
  viewer_id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  create_time datetime DEFAULT NULL
);