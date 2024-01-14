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
exports.getToken_by_user = void 0;
const getAbiAndAddress_1 = require("../collector/getAbiAndAddress");
const config_1 = require("../config");
const Token_service_1 = __importDefault(require("../../../Token/Token.service"));
const path = __importStar(require("path"));
const JSON_1 = require("../../JSON");
const EOA_service_1 = __importDefault(require("../../../EOA/EOA.service"));
const Token_EOA_service_1 = __importDefault(require("../../../TokenEoa/Token_EOA.service"));
const getToken_by_user = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const web3 = yield (0, config_1.getProvider)();
        const dbinfo = yield Token_service_1.default.getAllTokens();
        const jsonFilePath = path.join(JSON_1.DIRNAME, "erc20.json");
        const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
        if (dbinfo) {
            for (const token of dbinfo) {
                const myContract = new web3.eth.Contract(jsonData, token.dataValues.contractAddress);
                const cm = myContract.methods;
                for (const data of token.txs) {
                    const result_FROM = yield EOA_service_1.default.findEOAone(data.dataValues.from);
                    const result_TO = yield EOA_service_1.default.findEOAone(data.dataValues.to);
                    if (result_FROM === null || result_FROM === void 0 ? void 0 : result_FROM.dataValues) {
                        const balance = yield cm.balanceOf(data.dataValues.from).call();
                        const symbol = yield cm.symbol().call();
                        const name = yield cm.name().call();
                        console.log("가진토큰수result_FROM", name, balance);
                        yield Token_EOA_service_1.default.createTokenEoa(token.dataValues.id, result_FROM.dataValues.id, balance, name, symbol);
                    }
                    if (result_TO === null || result_TO === void 0 ? void 0 : result_TO.dataValues) {
                        const balance = yield cm.balanceOf(data.dataValues.to).call();
                        const symbol = yield cm.symbol().call();
                        const name = yield cm.name().call();
                        console.log("가진토큰수result_TO", balance);
                        yield Token_EOA_service_1.default.createTokenEoa(token.dataValues.id, result_TO.dataValues.id, balance.toString(), name, symbol);
                    }
                }
            }
        }
    }
    catch (err) {
        console.error("getToken_by_user error:", err);
    }
});
exports.getToken_by_user = getToken_by_user;
