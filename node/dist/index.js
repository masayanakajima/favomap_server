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
const express_1 = __importDefault(require("express"));
const user_info_1 = require("./models/user_info");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // db.ts内の関数を呼び出してデータを取得
    let result = yield (0, user_info_1.get_user_info)(1);
    // クライアントにデータを返す
    res.json(result);
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
