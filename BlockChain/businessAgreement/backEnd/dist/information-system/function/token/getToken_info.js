"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getTokeninfo = void 0;
const getAbiAndAddress_1 = require("../collector/getAbiAndAddress");
const config_1 = require("../config");
const CA_service_1 = __importDefault(require("../../../CA/CA.service"));
const Token_service_1 = __importDefault(require("../../../Token/Token.service"));
const path = __importStar(require("path"));
const JSON_1 = require("../../JSON");
const getTokeninfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const web3 = yield (0, config_1.getProvider)();
    let jsonData;
    let address;
    let tmparr = [];
    const result = yield CA_service_1.default.findCAtype();
    if (result !== undefined) {
        for (let i = 0; i < result.length; i++) {
            address = result[i].dataValues.address;
            const db_result = yield Token_service_1.default.isExist(address);
            // console.log(db_result);
            if (db_result !== undefined && db_result !== null ? true : false) {
                console.log("이미있는 토큰인데수웅");
                continue;
            }
            if (result[i].dataValues.CAtype == ``) {
                continue;
            }
            else if (result[i].dataValues.CAtype == `erc-20`) {
                const jsonFilePath = path.join(JSON_1.DIRNAME, "erc20.json");
                const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
                tmparr.push({
                    index: i,
                    address: address,
                    jsonData: jsonData,
                    contract_Adress: db_result === null || db_result === void 0 ? void 0 : db_result.dataValues.contract_address,
                    // 추가 필요한 다른 속성도 여기에 추가할 수 있음
                });
            }
            else if (result[i].dataValues.CAtype == `erc-721`) {
                const jsonFilePath = path.join(JSON_1.DIRNAME, "erc721.json");
                const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
                tmparr.push({
                    index: i,
                    address: address,
                    jsonData: jsonData,
                    contract_Adress: db_result === null || db_result === void 0 ? void 0 : db_result.dataValues.contract_address,
                    // 추가 필요한 다른 속성도 여기에 추가할 수 있음
                });
            }
            else if (result[i].dataValues.CAtype == `erc-1155`) {
                const jsonFilePath = path.join(JSON_1.DIRNAME, "erc1155.json");
                const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
                tmparr.push({
                    index: i,
                    address: address,
                    jsonData: jsonData,
                    contract_Adress: db_result === null || db_result === void 0 ? void 0 : db_result.dataValues.contract_address,
                    // 추가 필요한 다른 속성도 여기에 추가할 수 있음
                });
            }
        }
    }
    tmparr.forEach((value) => __awaiter(void 0, void 0, void 0, function* () {
        const contract = new web3.eth.Contract(value.jsonData, value.address);
        try {
            const data = {
                name: yield contract.methods.name().call(),
                contractAddress: value.address,
                symbol: yield contract.methods.symbol().call(),
                ownerAddress: "",
                decimal: yield contract.methods.decimals().call(),
                circulatingSupply: yield contract.methods.totalSupply().call(),
            };
            Token_service_1.default.createTokentest(data, value.contract_Adress);
        }
        catch (error) {
            console.error(" 오류 발생:", error);
        }
    }));
});
exports.getTokeninfo = getTokeninfo;
// getTokeninfo();
