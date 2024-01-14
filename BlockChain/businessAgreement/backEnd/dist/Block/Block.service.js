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
const createBlock = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.Block.create({
            number: data.number,
            hash: data.hash,
            parentHash: data.parentHash,
            sha3Uncles: data.sha3Uncles,
            logsBloom: data.logsBloom,
            transactionsRoot: data.transactionsRoot,
            stateRoot: data.stateRoot,
            receiptsRoot: data.receiptsRoot,
            miner: data.miner,
            difficulty: data.difficulty,
            extraData: data.extraData,
            gasLimit: data.gasLimit,
            gasUsed: data.gasUsed,
            timestamp: data.timestamp,
            baseFeePerGas: data.baseFeePerGas,
            withdrawalsRoot: data.withdrawalsRoot,
            nonce: data.nonce,
            mixHash: data.mixHash,
        });
    }
    catch (error) {
        next(error);
    }
});
const viewAllBlocks = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blocks = yield database_1.default.models.Block.findAll({
            order: [["timestamp", "DESC"]],
        });
        return blocks;
    }
    catch (error) {
        next(error);
    }
});
const viewOneBlock = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const block = yield database_1.default.models.Block.findOne({
            where: { id },
            include: { model: database_1.default.models.Tx },
        });
        return block;
    }
    catch (error) {
        next(error);
    }
});
const findBlockNum = (number, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const block = yield database_1.default.models.Block.findOne({
            where: { number },
            include: { model: database_1.default.models.Tx },
        });
        return block;
    }
    catch (error) {
        next(error);
    }
});
const updateTxNum = (id, txnum, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.Block.update({ txNumber: txnum }, { where: { id } });
    }
    catch (error) {
        next(error);
    }
});
const findOneblock = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.models.Block.findOne({
            where: {
                id: id,
            },
        });
        return result;
    }
    catch (error) {
        console.log("findOneblock", error);
    }
});
const createBlocktest = (data, txnscount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("createBlocktest");
        const { number, hash, parentHash, sha3Uncles, logsBloom, transactionsRoot, stateRoot, receiptsRoot, miner, difficulty, extraData, gasLimit, gasUsed, timestamp, baseFeePerGas, withdrawalsRoot, nonce, mixHash, } = data;
        const value = yield database_1.default.models.Block.create({
            number,
            hash,
            parentHash,
            sha3Uncles,
            logsBloom,
            transactionsRoot,
            stateRoot,
            receiptsRoot,
            miner,
            difficulty,
            extraData,
            gasLimit,
            gasUsed,
            timestamp,
            baseFeePerGas: 0,
            withdrawalsRoot: 0,
            nonce,
            mixHash,
            txcount: txnscount,
        });
        // console.log("밸류밸류밸류밸류", value);
        return value;
    }
    catch (error) {
        console.log("Error");
    }
});
exports.default = {
    createBlock,
    createBlocktest,
    viewAllBlocks,
    viewOneBlock,
    updateTxNum,
    findOneblock,
    findBlockNum,
};
