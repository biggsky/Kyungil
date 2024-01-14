"use strict";
// import Web3 from "web3";
// import * as path from "path";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const testfun = async () => {
//   const RPC_URL =
//     "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";
//   const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL));
//   const txHash =
//     "0x3153cd61cf41fece0f92a1a4c1f657f90f8e4603ba5726fab095756223f4c24d";
//   const result = await web3.eth.getTransactionReceipt(txHash);
//   console.log(result);
//   const transferEvents = result.logs.filter(
//     (log: any) =>
//       log.topics[0] === web3.utils.sha3("Transfer(address,address,uint256)")
//   );
//   if (transferEvents.length > 0) {
//     console.log("This transaction includes ERC-721 token transfer.");
//   } else {
//     console.log("This transaction does not include ERC-721 token transfer.");
//   }
//   const originalPath =
//     "/Users/jeonghyeon-ug/Desktop/lastlastlastproject/back/information-system/function/token/back/information-system/JSON/erc20.json";
//   const targetPath =
//     "/Users/jeonghyeon-ug/Desktop/lastlastlastproject/back/information-system/JSON/erc20.json";
//   // 상대 경로 계산
//   const relativePath = path.relative(targetPath, originalPath);
//   console.log("상대 경로:", relativePath);
// };
// testfun();
const asd = () => __awaiter(void 0, void 0, void 0, function* () {
    // const ipfsURI = "QmT5ciBnHH9YqR4FjkPJNHN6KeEFDkQdmcBk3b6f4PCrYS/1.json";
    // const ipfsGateway = "https://ipfs.infura.io/ipfs/";
    // const httpURI = ipfsGateway + ipfsURI;
    // const response = await fetch(httpURI);
    // console.log(response);
    // const metadata = JSON.stringify(response);
    // console.log(metadata);
    const ipfsHash = "QmT5ciBnHH9YqR4FjkPJNHN6KeEFDkQdmcBk3b6f4PCrYS"; // 이 부분을 수정하여 실제 IPFS 해시로 대체
    try {
        const response = yield fetch(`https://ipfs.io/ipfs/${ipfsHash}/1.json`);
        const metadata = yield response.json();
        console.log(metadata);
    }
    catch (error) {
        console.error("getnftinfo", error);
    }
});
asd();
