#!/bin/bash

# MySQL接続情報
MYSQL_USER="favomap"
MYSQL_PASSWORD="password"
MYSQL_HOST="mysql"
MYSQL_PORT="3306"

# SQLファイルが格納されているディレクトリ
SQL_DIR="/usr/src/app/sql"

# SQLファイルを取得し、順番に実行
for sql_file in $SQL_DIR/*.sql
do
  base_name="${sql_file%.*}"
  number=$(echo "$base_name" | grep -oE '[0-9]+')
  DATABASE_NAME=favomap$number
  echo "実行中: $sql_file"
  mysql -u$MYSQL_USER -p$MYSQL_PASSWORD -h$MYSQL_HOST -P$MYSQL_PORT $DATABASE_NAME < $sql_file
  echo "完了"
done