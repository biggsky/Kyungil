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
const Tx_dto_1 = __importDefault(require("./Tx.dto"));
const Tx_service_1 = __importDefault(require("./Tx.service"));
const CreateTx = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new Tx_dto_1.default(req.body);
        yield Tx_service_1.default.createTx(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewAllTxs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Tx_service_1.default.viewAllTxs(next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const ViewOneTx = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield Tx_service_1.default.viewOneTx(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateTx = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const reqDTO = new Tx_dto_1.default(req.body);
        yield Tx_service_1.default.updateTx(id, reqDTO, next);
    }
    catch (error) {
        next(error);
    }
});
const FindTx = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hash = req.params.hash.toString();
        const data = yield Tx_service_1.default.findTx(hash, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateTx, ViewAllTxs, ViewOneTx, UpdateTx, FindTx };
