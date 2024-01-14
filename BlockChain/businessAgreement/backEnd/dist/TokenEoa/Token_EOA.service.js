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
const database_1 = __importDefault(require("../database"));
const createTokenEoa = (tokenId, eoaId, amount, name, symbol) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("createTokenEoa", tokenId, eoaId, amount, name, symbol);
        // 중복된 값이 있는지 확인
        const existingTokenEoa = yield database_1.default.models.TokenEOA.findOne({
            where: {
                eoaid: eoaId,
                tokenid: tokenId,
            },
        });
        if (!existingTokenEoa) {
            // 중복된 값이 없으면 레코드 추가
            yield database_1.default.models.TokenEOA.create({
                eoaid: eoaId,
                tokenid: tokenId,
                amount: amount,
                name: name,
                symbol: symbol,
            });
            console.log("TokenEOA created successfully.");
        }
        else {
            console.log("TokenEOA already exists. Not creating a duplicate.");
        }
    }
    catch (error) {
        console.error("createTokenEoa", error);
    }
});
exports.default = { createTokenEoa };
