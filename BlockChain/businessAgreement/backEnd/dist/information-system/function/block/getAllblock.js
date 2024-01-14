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
exports.getallblock = void 0;
const analyzeData_1 = require("../analyzer/analyzeData");
const getQueue_1 = require("../queue/getQueue");
const config_1 = require("../config");
const CHAIN_ID = 18328;
const myQueue = new getQueue_1.Queue();
const getallblock = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const web3 = yield (0, config_1.getProvider)();
        const latestBlock = yield web3.eth.getBlock("latest", true);
        console.log(latestBlock);
        let latestBlockNumber;
        if (latestBlock.number !== undefined) {
            latestBlockNumber = latestBlock.number;
            for (let i = 3404784; i <= Number(latestBlockNumber) - 1; i++) {
                yield new Promise((resolve) => setTimeout(resolve, 100)); // 1초 지연
                const block = yield web3.eth.getBlock(i);
                yield (0, analyzeData_1.analyzeData)(block);
                if (block.transactions) {
                    // console.log(block.transactions);
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getallblock = getallblock;
