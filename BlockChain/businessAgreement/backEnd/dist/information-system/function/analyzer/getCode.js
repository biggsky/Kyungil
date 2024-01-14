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
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineAddressType = exports.isContract = void 0;
const config_1 = require("../config");
function isContract(hash) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = yield (0, config_1.getProvider)();
        const code = yield web3.eth.getCode(hash);
        return code !== "0x";
    });
}
exports.isContract = isContract;
function determineAddressType(blockHash) {
    return __awaiter(this, void 0, void 0, function* () {
        const isContractAddress = yield isContract(blockHash);
        if (isContractAddress) {
            // console.log(blockHash + "는 스마트 컨트랙트 주소입니다.");
            return "contract";
        }
        else {
            // console.log(blockHash + "는 일반 이더리움 계정 주소입니다.");
            return "EOA";
        }
    });
}
exports.determineAddressType = determineAddressType;
