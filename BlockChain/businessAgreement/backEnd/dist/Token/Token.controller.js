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
const Token_dto_1 = __importDefault(require("./Token.dto"));
const Token_service_1 = __importDefault(require("./Token.service"));
const CreateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new Token_dto_1.default(req.body);
        yield Token_service_1.default.createToken(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewAllTokens = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Token_service_1.default.viewAllTokens(next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const ViewOneToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield Token_service_1.default.viewOneToken(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const reqDTO = new Token_dto_1.default(req.body);
        yield Token_service_1.default.updateToken(id, reqDTO, next);
    }
    catch (error) {
        next(error);
    }
});
const FindToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name.toString();
        const data = yield Token_service_1.default.findToken(name, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateToken, ViewAllTokens, ViewOneToken, UpdateToken, FindToken };
