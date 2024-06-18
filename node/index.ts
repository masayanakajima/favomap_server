import express, { Request, Response } from "express";
import { get_user_info } from './models/user_info';

const app = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  // db.ts内の関数を呼び出してデータを取得
  let result = await get_user_info(1);

  // クライアントにデータを返す
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
