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
const EOA_dto_1 = __importDefault(require("./EOA.dto"));
const EOA_service_1 = __importDefault(require("./EOA.service"));
const CreateEOA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new EOA_dto_1.default(req.body);
        yield EOA_service_1.default.createEOA(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewOneEOA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield EOA_service_1.default.viewOneEOA(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateEOA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const reqDTO = new EOA_dto_1.default(req.body);
        yield EOA_service_1.default.updateEOA(id, reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const FindEOA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = req.params.address.toString();
        const data = yield EOA_service_1.default.findEOA(address, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateEOA, ViewOneEOA, UpdateEOA, FindEOA };
