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
const NFT_dto_1 = __importDefault(require("./NFT.dto"));
const NFT_service_1 = __importDefault(require("./NFT.service"));
const CreateNFT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new NFT_dto_1.default(req.body);
        yield NFT_service_1.default.createNFT(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewAllNFTs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield NFT_service_1.default.viewAllNFTs(next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const ViewOneNFT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield NFT_service_1.default.viewOneNFT(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateNFT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const reqDTO = new NFT_dto_1.default(req.body);
        yield NFT_service_1.default.updateNFT(id, reqDTO, next);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateNFT, ViewAllNFTs, ViewOneNFT, UpdateNFT };
