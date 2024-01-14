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
exports.CollectStart_http = void 0;
const getQueue_1 = require("./queue/getQueue");
const analyzeData_1 = require("./analyzer/analyzeData");
const config_1 = require("./config");
const getToken_info_1 = require("./token/getToken_info");
const getnft_info_1 = require("./nft/getnft_info");
const getEoa_info_1 = require("./eoa/getEoa_info");
const geToken_by_user_1 = require("./token/geToken_by_user");
const myQueue = new getQueue_1.Queue();
let hahah;
const ANALYZE_INTERVAL = 2000;
const TOKEN_INFO_INTERVAL = 300000;
const NFT_INFO_INTERVAL = 500000;
const EOAINFO_INTERVAL = 700000;
const TOKEN_BY_USER_INTERVAL = 400000;
const CollectStart_http = () => __awaiter(void 0, void 0, void 0, function* () {
    const web3 = yield (0, config_1.getProvider)();
    let analyzeDatajudgement = new Array(5).fill(true);
    let latestBlock;
    let tmpblock;
    try {
        latestBlock = yield web3.eth.getBlock("latest", true);
        const analyzeLoop = () => __awaiter(void 0, void 0, void 0, function* () {
            tmpblock = yield web3.eth.getBlock("latest", true);
            if (latestBlock.number !== tmpblock.number) {
                console.log("응애");
                latestBlock = tmpblock;
                myQueue.enqueue(latestBlock);
                console.log(myQueue.size());
                for (let i = 0; i < analyzeDatajudgement.length; i++) {
                    if (analyzeDatajudgement[i]) {
                        analyzeDatajudgement[i] = false;
                        analyzeDatajudgement[i] = yield processDataQueue();
                    }
                }
            }
            setTimeout(analyzeLoop, ANALYZE_INTERVAL);
        });
        setTimeout(analyzeLoop, ANALYZE_INTERVAL);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getToken_info_1.getTokeninfo)();
        }), TOKEN_INFO_INTERVAL);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getnft_info_1.getnftinfo)();
        }), NFT_INFO_INTERVAL);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getEoa_info_1.getEoainfo)();
        }), EOAINFO_INTERVAL);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, geToken_by_user_1.getToken_by_user)();
        }), TOKEN_BY_USER_INTERVAL);
    }
    catch (error) {
        console.error("Error:", error);
    }
});
exports.CollectStart_http = CollectStart_http;
// processDataQueue 함수 수정
function processDataQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("processDataQueue 실행되었음!");
        const data = myQueue.dequeue();
        if (data !== undefined && data !== null) {
            try {
                yield (0, analyzeData_1.analyzeData)(data);
                return true;
            }
            catch (error) {
                console.error("Error in analyzeData:", error);
                return false;
            }
        }
        else {
            console.log("블록 데이터가 없다. 다시 대기 상태로 만들어주기");
            return true;
        }
    });
}
