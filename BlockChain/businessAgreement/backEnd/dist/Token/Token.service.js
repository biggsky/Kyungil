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
const createToken = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contractAddress, name, symbol, ownerAddress, decimal, circulatingSupply, } = data;
        yield database_1.default.models.Token.create({
            contractAddress,
            name,
            symbol,
            ownerAddress,
            decimal,
            circulatingSupply,
        });
    }
    catch (error) {
        next(error);
    }
});
const viewAllTokens = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokens = yield database_1.default.models.Token.findAll();
        return tokens;
    }
    catch (error) {
        next(error);
    }
});
const viewOneToken = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield database_1.default.models.Token.findOne({
            where: { id },
            include: { model: database_1.default.models.Tx },
        });
        return token;
    }
    catch (error) {
        next(error);
    }
});
const getAllTokens = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokens = yield database_1.default.models.Token.findAll({
            include: {
                model: database_1.default.models.Tx,
            },
        });
        return tokens;
    }
    catch (error) {
        console.log("getAllTokens", error);
    }
});
const createTokentest = (data, contractAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contractAddress, name, symbol, ownerAddress, decimal, circulatingSupply, } = data;
        const result = yield database_1.default.models.Token.create({
            contractAddress,
            name,
            symbol,
            ownerAddress,
            decimal,
            circulatingSupply,
        });
        // 'from' 열의 값을 찾아서 'token_id' 업데이트
        yield database_1.default.models.Tx.update({ token_id: result.dataValues.id }, // 업데이트할 값
        { where: { from: contractAddress } } // 조건
        );
        // 'to' 열의 값을 찾아서 'token_id' 업데이트
        yield database_1.default.models.Tx.update({ token_id: result.dataValues.id }, // 업데이트할 값
        { where: { to: contractAddress } } // 조건
        );
    }
    catch (error) {
        console.log("토큰 서비스에서 토큰 데이터 추가하다 에러남");
        console.log(error);
    }
});
const isExist = (address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.models.Token.findOne({
            where: {
                contractAddress: address,
            },
        });
        return result;
    }
    catch (error) {
        console.log("isExist", error);
    }
});
const updateToken = (id, data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.Token.update({ circulatingSupply: data.circulatingSupply }, { where: { id } });
    }
    catch (error) {
        next(error);
    }
});
const findToken = (name, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield database_1.default.models.Token.findOne({
            where: { name },
            include: { model: database_1.default.models.Tx },
        });
        return token;
    }
    catch (error) {
        next(error);
    }
});
exports.default = {
    createToken,
    createTokentest,
    isExist,
    viewAllTokens,
    viewOneToken,
    updateToken,
    findToken,
    getAllTokens,
};
