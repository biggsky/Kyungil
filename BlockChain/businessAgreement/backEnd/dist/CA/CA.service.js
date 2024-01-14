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
const sequelize_1 = require("sequelize");
const createCA = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.CA.create({
            address: data.address,
            abiSigniture: data.abiSigniture,
            signitureNames: data.signitureNames,
        });
    }
    catch (error) {
        next(error);
    }
});
const viewOneCA = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ca = yield database_1.default.models.CA.findOne({
            where: { id },
            include: { model: database_1.default.models.Tx },
        });
        return ca;
    }
    catch (error) {
        next(error);
    }
});
const updateCA = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await db.models.CA.update({ abi: data.abi }, { where: { id } });
        yield postjson(data);
        yield CAtxnsMethodsUpdate(data.address, data);
    }
    catch (error) {
        console.log("caservice updateCA error");
        next(error);
    }
});
const findCA = (address, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ca = yield database_1.default.models.CA.findOne({
            where: { address },
            include: { model: database_1.default.models.Tx },
        });
        return ca;
    }
    catch (error) {
        next(error);
    }
});
const findCAtype = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.models.CA.findAll({
            include: {
                model: database_1.default.models.Tx,
            },
        });
        return result;
    }
    catch (error) {
        console.log("findCAtype", error);
    }
});
const findTxByCAType = (caType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // CA 타입이 'erc721'인 CA 정보 가져오기
        const ca = yield database_1.default.models.CA.findAll({
            where: { CAtype: caType },
            include: [
                {
                    model: database_1.default.models.Tx, // Tx 정보도 함께 가져오기
                },
            ],
        });
        console.log("findTxByCAType", ca);
        if (!ca) {
            console.log(`CA with type ${caType} not found.`);
            return null;
        }
        // CA에 연결된 Tx 정보 출력
        console.log(`Tx information for CA with type ${caType}`);
        return ca; // 반환할 때는 연결된 Tx 정보를 반환하거나 다른 방식으로 활용할 수 있습니다.
    }
    catch (error) {
        console.log("findTxByCAType", error);
    }
});
const createCATest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, abiSigniture, signitureNames, CAtype } = data;
        const result = yield database_1.default.models.CA.create({
            address,
            CAtype,
            abiSigniture,
            signitureNames,
        });
        return result;
    }
    catch (error) {
        console.log("createCATest에서 오류발생", error);
    }
});
const postjson = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDuplicate = yield database_1.default.models.CA.findOne({
            where: {
                address: data.address,
            },
        });
        if (isDuplicate) {
            yield database_1.default.models.CA.update({
                abiSigniture: data.abiSigniture,
                signitureNames: data.signitureNames,
                abi: data.abi,
                CAtype: data.CAtype,
            }, { where: { address: data.address } });
        }
        else {
            yield database_1.default.models.CA.create({
                address: data.address,
                abiSigniture: data.abiSigniture,
                signitureNames: data.signitureNames,
                abi: data.abi,
                CAtype: data.CAtype,
            });
        }
    }
    catch (error) {
        console.log("CAmodel의 postjson", error);
    }
});
const CAtxnsMethodsUpdate = (address, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield database_1.default.models.Tx.findAll({
            where: {
                [sequelize_1.Op.or]: [{ from: address }, { to: address }],
            },
        });
        yield Promise.all(transactions.map((value) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(value.dataValues.Method);
            for (let i = 0; i < data.signitureNames.length; i++) {
                if (data.abiSigniture[i] === value.dataValues.Method) {
                    yield database_1.default.models.Tx.update({ Method: data.signitureNames[i] }, { where: { id: value.id } });
                }
            }
        })));
        console.log(transactions);
    }
    catch (error) {
        console.log("CAmodel의 CAtxnsMethodsUpdate", error);
    }
});
exports.default = {
    createCA,
    createCATest,
    findCAtype,
    viewOneCA,
    updateCA,
    findTxByCAType,
    postjson,
    CAtxnsMethodsUpdate,
    findCA,
};
