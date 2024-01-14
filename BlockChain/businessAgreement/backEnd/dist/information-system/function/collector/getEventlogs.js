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
const web3_1 = __importDefault(require("web3"));
const contractAddress2 = "0xd19dB9F1c36Fa67a5EF55D225e934Aa5fADC2247";
const RPC_URL = "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";
// const RPC_URL = "https://network.bouncecode.net/";
// const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
const web3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider(RPC_URL));
// readonly id?: string | undefined;
//       readonly removed?: boolean | undefined;
//       readonly logIndex?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly transactionIndex?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly transactionHash?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly blockHash?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly blockNumber?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly address?: string | undefined;
//       readonly data?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly topics?: import("web3-types").ByteTypes[ReturnFormat["bytes"]][]
const options = {
    fromBlock: "earliest",
    toBlock: "latest",
    address: `${contractAddress2}`, // 스마트 컨트랙트 주소
};
// // 트랜잭션을 검색
const getEventlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const resulting = yield web3.eth.getPastLogs(options);
    console.log(options, resulting);
    for (let i = 0; i < resulting.length; i++) {
        const log = resulting[i]; // 결과에서 로그를 추출
        const logData = typeof log === "string" ? JSON.parse(log) : log;
        console.log(logData.transactionHash); // 객체이므로 속성에 접근 가능
        const trans = yield web3.eth.getTransaction(logData.transactionHash);
        console.log("trans######", trans);
        const block = yield web3.eth.getBlock(trans.blockNumber);
        if (block) {
            const timestamp = new Date(Number(block.timestamp) * 1000); // 블록의 타임스탬프를 밀리초로 변환
            console.log("timestamp", timestamp);
        }
    }
});
getEventlogs();
