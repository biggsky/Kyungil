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
const Block_dto_1 = __importDefault(require("./Block.dto"));
const Block_service_1 = __importDefault(require("./Block.service"));
const CreateBlock = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new Block_dto_1.default(req.body);
        yield Block_service_1.default.createBlock(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewAllBlocks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Block_service_1.default.viewAllBlocks(next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const ViewOneBlock = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield Block_service_1.default.viewOneBlock(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateTxNum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const reqDTO = new Block_dto_1.default(req.body);
        const txcount = reqDTO.txcount;
        yield Block_service_1.default.updateTxNum(id, txcount, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const FindBlockNum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const number = Number(req.params.number);
        const data = yield Block_service_1.default.findBlockNum(number, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateBlock, ViewAllBlocks, ViewOneBlock, UpdateTxNum, FindBlockNum };
