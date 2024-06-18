"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_by_viewer_id = exports.connection = void 0;
// db.ts
const mysql_1 = __importDefault(require("mysql"));
const SHARD = 4;
const connection = mysql_1.default.createConnection({
    host: 'mysql',
    user: 'example_user',
    password: 'example_password',
    database: 'example_db',
});
exports.connection = connection;
connection.connect((err) => {
    if (err) {
        console.error('データベースに接続できませんでした: ' + err.stack);
        return;
    }
    console.log('データベースに接続しました');
});
const get_by_viewer_id = (table_name, viewer_id) => __awaiter(void 0, void 0, void 0, function* () {
    let shard = viewer_id % SHARD;
    let shard_table_name = table_name + '_' + shard;
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ' + shard_table_name + ' WHERE viewer_id = ' + viewer_id, (error, results, fields) => {
            if (error) {
                console.error('クエリエラー: ' + error.stack);
                reject(error);
                return;
            }
            resolve(results);
        });
    });
});
exports.get_by_viewer_id = get_by_viewer_id;
