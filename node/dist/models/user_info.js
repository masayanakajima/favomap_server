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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user_info = void 0;
const db_1 = require("../core/db");
const table_name = 'user_info';
const get_user_info = (viewer_id) => __awaiter(void 0, void 0, void 0, function* () {
    // MySQLクエリを実行してデータを取得
    const result = yield (0, db_1.get_by_viewer_id)(table_name, viewer_id);
    return result;
});
exports.get_user_info = get_user_info;
