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
exports.sigJudgemetTest = void 0;
const sigInterface_1 = require("../../Sig_abi_Arrary/sigInterface");
const config_1 = require("../config");
function sigJudgemetTest(transactionhash) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = yield (0, config_1.getProvider)();
        const transaction = yield web3.eth.getTransaction(transactionhash);
        const sig = transaction.input.slice(0, 10);
        // console.log(sig);
        // for (let i = 0; i < signitureERC20.length; i++) {
        //   if (signitureERC20[i] == sig) {
        //     const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
        //     // 전송하는 토큰의 양 (amount)
        //     const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
        //     console.log(`ERC-20 ${signiturenameERC20[i]} Detected:`);
        //     console.log("To Address:", toAddress);
        //     console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
        //     break;
        //   }
        // }
        // for (let i = 0; i < signitureERC721.length; i++) {
        //   if (signitureERC721[i] == sig) {
        //     const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
        //     // 전송하는 토큰의 양 (amount)
        //     const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
        //     console.log(`ERC-721 ${signiturenameERC721[i]} Detected:`);
        //     console.log("To Address:", toAddress);
        //     console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
        //     break;
        //   }
        for (let i = 0; i < sigInterface_1.signitureERC20public.length; i++) {
            if (sigInterface_1.signitureERC20public[i] == sig) {
                const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
                // 전송하는 토큰의 양 (amount)
                const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
                console.log(`ERC-20 public ${sigInterface_1.signiturenameERC20public[i]} Detected:`);
                console.log("To Address:", toAddress);
                console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
                return `erc-20,${sig},${sigInterface_1.signiturenameERC20public[i]},${toAddress},${value}`;
            }
        }
        for (let i = 0; i < sigInterface_1.signitureERC721public.length; i++) {
            if (sigInterface_1.signitureERC721public[i] == sig) {
                const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
                // 전송하는 토큰의 양 (amount)
                const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
                console.log(`ERC-721 ${sigInterface_1.signiturenameERC721public[i]} Detected:`);
                console.log("To Address:", toAddress);
                console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
                return `erc-721,${sig},${sigInterface_1.signiturenameERC721public[i]},${toAddress},${value}`;
            }
        }
        for (let i = 0; i < sigInterface_1.signitureERC1155.length; i++) {
            if (sigInterface_1.signitureERC1155[i] == sig) {
                const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
                // 전송하는 토큰의 양 (amount)
                const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
                console.log(`ERC-1155 ${sigInterface_1.signiturenameERC1155[i]} Detected:`);
                console.log("To Address:", toAddress);
                console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
                return `erc-1155,${sig},${sigInterface_1.signiturenameERC1155[i]},${toAddress},${value}`;
            }
        }
        return sig;
    });
}
exports.sigJudgemetTest = sigJudgemetTest;
