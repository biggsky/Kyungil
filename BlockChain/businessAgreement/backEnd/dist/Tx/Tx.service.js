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
const getAddresstype_1 = require("../information-system/function/txns/getAddresstype");
const TxCA_service_1 = __importDefault(require("../TxCA/TxCA.service"));
const TxEOA_service_1 = __importDefault(require("../TxEOA/TxEOA.service"));
const createTx = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accessList, chainId, from, gas, gasPrice, hash, input, maxFeePerGas, maxPriorityFeePerGas, r, s, to, transactionIndex, type, v, value, Method, Timestamp, } = data;
        yield database_1.default.models.Tx.create({
            accessList,
            chainId,
            from,
            gas,
            gasPrice,
            hash,
            input,
            maxFeePerGas,
            maxPriorityFeePerGas,
            r,
            s,
            to,
            transactionIndex,
            type,
            v,
            value,
            Method,
            Timestamp,
        });
    }
    catch (error) {
        next(error);
    }
});
const CreateTxTest = (data, getcoderesultFrom, getcoderesultTO, sigEvaluateresult, timestamp, block_id, blocknumber) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accessList, chainId, from, gas, gasPrice, hash, input, maxFeePerGas, maxPriorityFeePerGas, r, s, to, transactionIndex, type, v, value, Method, Timestamp, } = data;
        const Fromcol_id = yield (0, getAddresstype_1.getAddresstype)(from, getcoderesultFrom, sigEvaluateresult);
        const TOcol_id = yield (0, getAddresstype_1.getAddresstype)(to, getcoderesultTO, sigEvaluateresult);
        console.log(sigEvaluateresult);
        const parts = sigEvaluateresult.split(",");
        const result = yield database_1.default.models.Tx.create({
            accessList,
            chainId,
            from,
            gas,
            gasPrice,
            hash,
            input,
            maxFeePerGas,
            maxPriorityFeePerGas,
            r,
            s,
            to,
            transactionIndex,
            type,
            v,
            value,
            Method: parts[2] || sigEvaluateresult,
            Timestamp: timestamp,
            block_id: block_id,
            blocknumber,
        });
        if (getcoderesultFrom == getcoderesultTO) {
            if (getcoderesultFrom == "contract") {
                yield TxCA_service_1.default.createTxCA(result.dataValues.id, Fromcol_id.dataValues.id);
                yield TxCA_service_1.default.createTxCA(result.dataValues.id, TOcol_id.dataValues.id);
            }
            else if (getcoderesultFrom == "EOA") {
                yield TxEOA_service_1.default.createTxEOA(result.dataValues.id, Fromcol_id.dataValues.id);
                yield TxEOA_service_1.default.createTxEOA(result.dataValues.id, TOcol_id.dataValues.id);
            }
        }
        else {
            if (getcoderesultFrom == "EOA") {
                yield TxEOA_service_1.default.createTxEOA(result.dataValues.id, Fromcol_id.dataValues.id);
                yield TxCA_service_1.default.createTxCA(result.dataValues.id, TOcol_id.dataValues.id);
            }
            else if (getcoderesultFrom == "contract") {
                yield TxEOA_service_1.default.createTxEOA(result.dataValues.id, TOcol_id.dataValues.id);
                yield TxCA_service_1.default.createTxCA(result.dataValues.id, Fromcol_id.dataValues.id);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
const getFindone = (tmp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tmpdata = tmp.toLocaleLowerCase();
        const result = yield database_1.default.models.Tx.findOne({
            where: {
                hash: tmpdata,
            },
        });
        console.log("getFindone", result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const viewAllTxs = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const txs = yield database_1.default.models.Tx.findAll({ order: [['Timestamp', 'DESC']] });
        return txs;
    }
    catch (error) {
        next(error);
    }
});
const viewOneTx = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tx = yield database_1.default.models.Tx.findOne({ where: { id: id } });
        return tx;
    }
    catch (error) {
        next(error);
    }
});
const updateTx = (id, data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.Tx.update({ Method: data.Method }, { where: { id } });
    }
    catch (error) {
        next(error);
    }
});
const findTx = (hash, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tx = yield database_1.default.models.Tx.findOne({ where: { hash } });
        return tx;
    }
    catch (error) {
        next(error);
    }
});
exports.default = {
    createTx,
    CreateTxTest,
    viewAllTxs,
    viewOneTx,
    getFindone,
    updateTx,
    findTx
};
