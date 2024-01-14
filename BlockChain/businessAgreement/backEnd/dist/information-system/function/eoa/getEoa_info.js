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
exports.getEoainfo = void 0;
const config_1 = require("../config");
const getAbiAndAddress_1 = require("../collector/getAbiAndAddress");
const JSON_1 = require("../../JSON");
const path_1 = __importDefault(require("path"));
const EOA_service_1 = __importDefault(require("../../../EOA/EOA.service"));
const getEoainfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonFilePath = path_1.default.join(JSON_1.DIRNAME, "erc20public.json");
    const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
    const web3 = yield (0, config_1.getProvider)();
    const result = yield EOA_service_1.default.getEoall();
    try {
        if (result !== undefined) {
            for (const value of result) {
                const result = yield web3.eth.getBalance(value.dataValues.address);
                console.log("getEoainfo", result);
                EOA_service_1.default.updateEoaethBalance(value.dataValues.address, result);
                const contract = new web3.eth.Contract(jsonData, value.dataValues.address);
                const cm = contract.methods;
            }
        }
    }
    catch (error) {
        console.log("getEoainfo", error);
    }
    // try {
    //   const CAresult = await CAService.findTxByCAType("erc-20");
    //   console.log("getEoainfo", CAresult[0].dataValues.txs);
    // } catch (error) {
    //   console.log("getEoainfo", error);
    // }
});
exports.getEoainfo = getEoainfo;
