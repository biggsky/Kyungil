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
const createEOA = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, token, ethBalance } = data;
        yield database_1.default.models.EOA.create({
            address,
            token,
            ethBalance,
        });
    }
    catch (error) {
        next(error);
    }
});
const viewOneEOA = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eoa = yield database_1.default.models.EOA.findOne({ where: { id }, include: { model: database_1.default.models.Tx } });
        return eoa;
    }
    catch (error) {
        next(error);
    }
});
const updateEOA = (id, data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.EOA.update({
            address: data.address,
            token: data.token,
            ethbalance: data.ethBalance,
        }, { where: { id } });
    }
    catch (error) {
        next(error);
    }
});
const findEOA = (address, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eoa = yield database_1.default.models.EOA.findOne({ where: { address }, include: { model: database_1.default.models.Tx } });
        return eoa;
    }
    catch (error) {
        next(error);
    }
});
const createEOATest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, token, ethBalance } = data;
        const result = yield database_1.default.models.EOA.create({
            address,
            token,
            ethBalance,
        });
        return result;
    }
    catch (error) {
        console.log("createEOATest", error);
    }
});
const getEoall = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.models.EOA.findAll({});
        return result;
    }
    catch (error) {
        console.log("getEoall", error);
    }
});
const updateEoaethBalance = (id, balance) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.EOA.update({ ethBalance: balance.toString() }, { where: { address: id } });
        console.log("실행?");
    }
    catch (error) {
        console.log("updateEoaethBalance", error);
    }
});
const findTxByEOA = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CA 타입이 'erc721'인 CA 정보 가져오기
        const ca = yield database_1.default.models.EOA.findAll({
            // where: { CAtype: caType },
            include: [
                {
                    model: database_1.default.models.Tx, // Tx 정보도 함께 가져오기
                },
            ],
        });
        console.log("findTxByEOA", ca);
        if (!ca) {
            console.log(`EOA with type not found.`);
            return null;
        }
        console.log(`Tx information for EOA`);
        return ca; // 반환할 때는 연결된 Tx 정보를 반환하거나 다른 방식으로 활용할 수 있습니다.
    }
    catch (error) {
        console.log("findTxByEOA", error);
    }
});
const findEOAone = (address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eoa = yield database_1.default.models.EOA.findOne({
            where: { address: address },
        });
        return eoa;
    }
    catch (error) {
        console.log("findEOAoneerror", error);
    }
});
exports.default = {
    createEOA,
    createEOATest,
    viewOneEOA,
    getEoall,
    updateEOA,
    updateEoaethBalance,
    findTxByEOA,
    findEOA,
    findEOAone,
};
