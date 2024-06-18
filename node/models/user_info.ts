import { get_by_viewer_id } from '../core/db';

const table_name = 'user_info';

const get_user_info = async (viewer_id: number) => {
  // MySQLクエリを実行してデータを取得
  const result = await get_by_viewer_id(table_name, viewer_id);
  return result;
}
  
export { get_user_info };
  
