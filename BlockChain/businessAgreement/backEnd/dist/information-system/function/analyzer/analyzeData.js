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
exports.analyzeData = void 0;
const getBlockInfo_1 = require("./getBlockInfo");
const getCode_1 = require("./getCode");
const getMatch_signiel_1 = require("./getMatch_signiel");
const Tx_service_1 = __importDefault(require("../../../Tx/Tx.service"));
const Block_service_1 = __importDefault(require("../../../Block/Block.service"));
// export async function analyzeData(data: any): Promise<boolean> {
//   let tmp: boolean = false;
//   let transaction: TxData;
//   let block_with_transaction: any;
//   let relationshipinfo: any;
//   console.log(data);
//   block_with_transaction = await getBlockInfo(data.blockNumber);
//   if (block_with_transaction.transactions) {
//     relationshipinfo = await BlockService.createBlocktest(
//       data,
//       block_with_transaction.transactions.length
//     );
//   } else {
//     relationshipinfo = await BlockService.createBlocktest(data, 0);
//   }
//   if (block_with_transaction.length > 0) {
//     console.log("analyzeData", block_with_transaction.transactions.length);
//     console.log("냐용");
//     let reusltFromType: string;
//     let reusltToType: string;
//     let sigEvaluateresult: string;
//     try {
//       for (
//         let i: number = 0;
//         i < block_with_transaction.transactions.length - 1;
//         i++
//       ) {
//         transaction = block_with_transaction.transactions[i];
//         try {
//           if (
//             block_with_transaction.transactions[i].hash == null ||
//             block_with_transaction.transactions[i].hash == undefined
//           ) {
//             continue;
//           } else {
//             sigEvaluateresult = await sigJudgemetTest(
//               block_with_transaction.transactions[i].hash
//             );
//           }
//           if (
//             block_with_transaction.transactions[i].to == null ||
//             block_with_transaction.transactions[i].to == undefined
//           ) {
//             continue;
//           } else {
//             reusltFromType = await determineAddressType(
//               block_with_transaction.transactions[i].from
//             );
//             reusltToType = await determineAddressType(
//               block_with_transaction.transactions[i].to
//             );
//           }
//           await Txservice.CreateTxTest(
//             transaction,
//             reusltFromType,
//             reusltToType,
//             sigEvaluateresult,
//             data?.timestamp,
//             relationshipinfo.dataValues.id,
//             block_with_transaction.number
//           );
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     } catch (error) {
//       console.log("analyzeData", error);
//     }
//   }
//   console.log("분석끝!");
//   tmp = true;
//   return tmp;
// }
function analyzeData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let tmp = false;
        let transaction;
        let block_with_transaction;
        let relationshipinfo;
        // console.log(data);
        block_with_transaction = yield (0, getBlockInfo_1.getBlockInfo)(data.number);
        if (block_with_transaction.transactions) {
            relationshipinfo = yield Block_service_1.default.createBlocktest(data, block_with_transaction.transactions.length);
        }
        else {
            relationshipinfo = yield Block_service_1.default.createBlocktest(data, 0);
        }
        if (block_with_transaction.transactions) {
            console.log("analyzeData", block_with_transaction.transactions.length);
            console.log("냐용");
            let reusltFromType;
            let reusltToType;
            let sigEvaluateresult;
            try {
                for (let i = 0; i < block_with_transaction.transactions.length; i++) {
                    transaction = block_with_transaction.transactions[i];
                    try {
                        if (block_with_transaction.transactions[i].hash == null ||
                            block_with_transaction.transactions[i].hash == undefined) {
                            continue;
                        }
                        else {
                            sigEvaluateresult = yield (0, getMatch_signiel_1.sigJudgemetTest)(block_with_transaction.transactions[i].hash);
                        }
                        if (block_with_transaction.transactions[i].to == null ||
                            block_with_transaction.transactions[i].to == undefined) {
                            continue;
                        }
                        else {
                            reusltFromType = yield (0, getCode_1.determineAddressType)(block_with_transaction.transactions[i].from);
                            reusltToType = yield (0, getCode_1.determineAddressType)(block_with_transaction.transactions[i].to);
                        }
                        yield Tx_service_1.default.CreateTxTest(transaction, reusltFromType, reusltToType, sigEvaluateresult, data === null || data === void 0 ? void 0 : data.timestamp, relationshipinfo.dataValues.id, block_with_transaction.number);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            }
            catch (error) {
                console.log("analyzeData", error);
            }
        }
        console.log("분석끝!");
        tmp = true;
        return tmp;
    });
}
exports.analyzeData = analyzeData;
