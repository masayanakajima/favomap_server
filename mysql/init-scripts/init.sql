CREATE DATABASE IF NOT EXISTS favomap10;
CREATE DATABASE IF NOT EXISTS favomap11;
CREATE DATABASE IF NOT EXISTS favomap12;
CREATE DATABASE IF NOT EXISTS favomap13;

CREATE USER 'favomap'@'node_app' IDENTIFIED BY 'password';
GRANT CREATE ON favomap10.* TO 'favomap'@'node_app';
GRANT CREATE ON favomap11.* TO 'favomap'@'node_app';
GRANT CREATE ON favomap12.* TO 'favomap'@'node_app';
GRANT CREATE ON favomap13.* TO 'favomap'@'node_app';