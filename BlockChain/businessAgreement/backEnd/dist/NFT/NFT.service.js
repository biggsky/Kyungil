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
const createNFT = (data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.NFT.create({
            tokenId: data.tokenId,
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            creatorAddress: data.creatorAddress,
            Owner: data.Owner,
        });
    }
    catch (error) {
        next(error);
    }
});
const viewAllNFTs = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nfts = yield database_1.default.models.NFT.findAll();
        return nfts;
    }
    catch (error) {
        next(error);
    }
});
const viewOneNFT = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nft = yield database_1.default.models.NFT.findOne({
            where: { id },
            include: { model: database_1.default.models.Tx },
        });
        return nft;
    }
    catch (error) {
        next(error);
    }
});
const updateNFT = (id, data, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.models.NFT.update({ Owner: data.Owner }, { where: { id } });
    }
    catch (error) {
        next(error);
    }
});
const createNFTTest = (data, txDataid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokenId, name, description, imageUrl, creatorAddress, Owner, address, } = data;
        const result = yield database_1.default.models.NFT.create({
            tokenId,
            name,
            description,
            imageUrl,
            creatorAddress,
            Owner,
            address,
        });
        const asd = yield database_1.default.models.Tx.update({ NFT_id: result.dataValues.id }, { where: { id: txDataid } });
        console.log("asdasdsad", asd);
    }
    catch (error) {
        console.log("NFT 서비스에서 NFT 데이터 추가하다 에러남");
        console.log(error);
    }
});
const NFTtabledestroy = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.models.NFT.destroy({
        where: {},
        truncate: true,
    });
});
const isExist = (tokenId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.models.NFT.findOne({
            where: {
                tokenId: tokenId,
            },
        });
        return result !== undefined && result !== null ? true : false;
    }
    catch (error) {
        console.log("isExist", error);
    }
});
// NFT.service.ts
const isDuplicateNFT = (id, address, newOwner) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 동일한 ID 또는 이름을 가진 NFT 중에서 소유자가 변경된 경우에만 업데이트
        const existingNFTs = yield database_1.default.models.NFT.findAll({
            where: {
                [sequelize_1.Op.or]: [{ tokenId: id }, { address: address }],
            },
        });
        if (existingNFTs.length === 0) {
            // 중복된 항목이 없으면 false 반환
            return false;
        }
        // 중복된 항목이 있는 경우
        for (const existingNFT of existingNFTs) {
            if (existingNFT.Owner !== newOwner) {
                // 소유자가 변경된 경우에만 업데이트
                yield existingNFT.update({ Owner: newOwner });
            }
        }
        return true; // 중복된 NFT가 있고 업데이트를 수행했을 때 true 반환
    }
    catch (error) {
        console.log("isDuplicateNFT", error);
        return false; // 오류 발생 시 중복으로 처리하지 않도록 false 반환
    }
});
exports.default = {
    createNFT,
    createNFTTest,
    isExist,
    viewAllNFTs,
    viewOneNFT,
    NFTtabledestroy,
    updateNFT,
    isDuplicateNFT
};
