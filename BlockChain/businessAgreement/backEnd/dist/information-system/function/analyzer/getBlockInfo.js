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
exports.getBlockInfo = void 0;
const config_1 = require("../config");
// accessList에 대한 구체적인 내용을 알려주시면 해당 부분을 업데이트할 수 있습니다.
function getBlockInfo(blockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = yield (0, config_1.getProvider)();
        try {
            // 특정 블록의 정보 가져오기
            const block = yield web3.eth.getBlock(blockNumber, true);
            if (block) {
                if (block.transactions) {
                    // console.log(block.transactions);
                }
                return block;
            }
            else {
                console.log("블록을 찾을 수 없습니다.");
            }
        }
        catch (error) {
            console.error("에러 발생:", error);
        }
    });
}
exports.getBlockInfo = getBlockInfo;
// 가져올 블록 번호를 지정합니다.
// const blockNumberToRetrieve = 3404791; // 원하는 블록 번호로 변경
// // 특정 블록 정보 가져오기
// getBlockInfo(blockNumberToRetrieve);
