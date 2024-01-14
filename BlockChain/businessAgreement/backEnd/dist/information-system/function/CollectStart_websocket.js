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
exports.subscribetest = void 0;
const getQueue_1 = require("./queue/getQueue");
const analyzeData_1 = require("./analyzer/analyzeData");
const getToken_info_1 = require("./token/getToken_info");
const getnft_info_1 = require("./nft/getnft_info");
const config_1 = require("./config");
const getEoa_info_1 = require("./eoa/getEoa_info");
const geToken_by_user_1 = require("./token/geToken_by_user");
const myQueue = new getQueue_1.Queue();
let hahah;
const subscribetest = () => __awaiter(void 0, void 0, void 0, function* () {
    const web3 = yield (0, config_1.getProvider)();
    let analyzeDatajudgement = new Array(5).fill(true);
    let tmpblock;
    try {
        const subscription = yield web3.eth.subscribe("newBlockHeaders", (error, blockHeader) => {
            if (!error) {
                console.log("Block Header:", blockHeader);
            }
            else {
                console.error("Error:", error);
            }
        });
        // "data" 이벤트 처리
        subscription.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
            myQueue.enqueue(data);
            console.log(myQueue.size());
            console.log(data);
            for (let i = 0; i < analyzeDatajudgement.length; i++) {
                if (analyzeDatajudgement[i] == true) {
                    try {
                        analyzeDatajudgement[i] = false;
                        analyzeDatajudgement[i] = yield processDataQueue();
                    }
                    catch (error) { }
                }
            }
        }));
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getToken_info_1.getTokeninfo)();
        }), 300000);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getnft_info_1.getnftinfo)();
        }), 500000);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, getEoa_info_1.getEoainfo)();
        }), 700000);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, geToken_by_user_1.getToken_by_user)();
        }), 400000);
    }
    catch (error) {
        console.error("Error:", error);
    }
});
exports.subscribetest = subscribetest;
function processDataQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("processDataQueue실행되었음!");
        const data = myQueue.dequeue();
        if (data !== undefined && data !== null) {
            // blockData가 정의되었을 때 수행할 작업
            // 예: blockData를 사용하는 로직
            // const relationshipinfo = await BlockServices.createBlocktest(data);
            // console.log("relationship", relationshipinfo);
            return yield (0, analyzeData_1.analyzeData)(data);
        }
        else {
            // blockData가 정의되지 않았을 때 수행할 작업
            console.log("블록데이터가없다. 다시 대가상태로만들어주기");
            return true;
        }
        // 데이터 분석을 비동기적으로 수행
        // if (data) {
        // } else {
        // }
    });
}
// setInterval(() => {
//   processDataQueue();
// }, 2000);
