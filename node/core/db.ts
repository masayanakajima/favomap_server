// db.ts
import mysql, { Connection, MysqlError, Query } from 'mysql';

const SHARD = 4;

const connection: Connection = mysql.createConnection({
  host: 'mysql',
  user: 'example_user',
  password: 'example_password',
  database: 'example_db',
});

connection.connect((err: MysqlError | null) => {
  if (err) {
    console.error('データベースに接続できませんでした: ' + err.stack);
    return;
  }

  console.log('データベースに接続しました');
});

const get_by_viewer_id = async (table_name: string, viewer_id: number) => {
  let shard = viewer_id % SHARD;
  let shard_table_name = table_name + '_' + shard;

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ' + shard_table_name + ' WHERE viewer_id = ' + viewer_id, (error: MysqlError | null, results: any[], fields: Query) => {
      if (error) {
        console.error('クエリエラー: ' + error.stack);
        reject(error);
        return;
      }
  
      resolve(results);
    });
  });
}


export { connection, get_by_viewer_id };