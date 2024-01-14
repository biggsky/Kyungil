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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getnftinfo = void 0;
const config_1 = require("../config");
const getAbiAndAddress_1 = require("../collector/getAbiAndAddress");
const CA_service_1 = __importDefault(require("../../../CA/CA.service"));
const NFT_service_1 = __importDefault(require("../../../NFT/NFT.service"));
const Tx_service_1 = __importDefault(require("../../../Tx/Tx.service"));
const JSON_1 = require("../../JSON");
const path_1 = __importDefault(require("path"));
const NFT_service_2 = __importDefault(require("../../../NFT/NFT.service"));
const Block_service_1 = __importDefault(require("../../../Block/Block.service"));
const url_1 = require("url"); // Node.js에서 URL 모듈을 사용하기 위해 import
// getnftinfo 함수 수정
const getnftinfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    var _d;
    try {
        let web3 = yield (0, config_1.getProvider)();
        const jsonFilePath = path_1.default.join(JSON_1.DIRNAME, "erc721.json");
        const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
        const result = yield CA_service_1.default.findCAtype();
        if (result) {
            const tmparr = [];
            try {
                for (var _e = true, result_1 = __asyncValues(result), result_1_1; result_1_1 = yield result_1.next(), _a = result_1_1.done, !_a; _e = true) {
                    _c = result_1_1.value;
                    _e = false;
                    const ca = _c;
                    if (ca.dataValues.CAtype === "erc-721") {
                        const contract = new web3.eth.Contract(jsonData, ca.dataValues.address);
                        const cm = contract.methods;
                        for (let i = 0; i < ca.dataValues.txs.length; i++) {
                            const tmp = yield Block_service_1.default.findOneblock(ca.dataValues.txs[i].dataValues.block_id);
                            let asd = tmp.dataValues.number;
                            // let tmparr: NFTData[] = [];
                            const pastEvents = yield contract.getPastEvents("allEvents", {
                                fromBlock: Number(tmp.dataValues.number) - 100,
                                toBlock: Number(tmp.dataValues.number),
                            });
                            // console.log(pastEvents);
                            const tmparr2 = {};
                            for (const pastEvent of pastEvents) {
                                const tokenId = pastEvent.returnValues.tokenId;
                                if (tokenId) {
                                    if (!tmparr2[tokenId]) {
                                        tmparr2[tokenId] = {
                                            tokenId,
                                            creator: pastEvent.returnValues.to,
                                            owner: pastEvent.returnValues.to,
                                            transactionhash: pastEvent.transactionHash,
                                            address: pastEvent.address,
                                        };
                                    }
                                    else {
                                        tmparr2[tokenId].owner = pastEvent.returnValues.to;
                                    }
                                }
                            }
                            console.log(tmparr2);
                            const tmparr3 = Object.values(tmparr2);
                            for (const value of tmparr3) {
                                try {
                                    const tokenURI = yield cm.tokenURI(value.tokenId).call();
                                    let httpURI = "";
                                    console.log("tmparr3,value", tokenURI);
                                    if (tokenURI.includes("http://") ||
                                        tokenURI.includes("ipfs:")) {
                                        const ipfsHash = yield tokenURI.replace(/^ipfs:\/\//, "");
                                        const ipfsGateway = "https://ipfs.io/ipfs/";
                                        httpURI = ipfsGateway + ipfsHash;
                                    }
                                    else {
                                        try {
                                            const regex = /^ipfs:\/\/([^/]+)\/([^/]+)$/;
                                            const match = tokenURI.match(regex);
                                            const hash = match[1] || "";
                                            const filename = match[2];
                                            httpURI = hash;
                                        }
                                        catch (error) {
                                            console.log(error);
                                        }
                                    }
                                    const metadata = yield fetchDataWithDelay(httpURI);
                                    const data = {
                                        tokenId: value.tokenId || "",
                                        name: metadata.name || "",
                                        description: metadata.description || "",
                                        imageUrl: metadata.imageUrl || "",
                                        creatorAddress: value.creator || "",
                                        Owner: value.owner || "",
                                        transactionhash: value.transactionhash || "",
                                        address: value.address || "",
                                    };
                                    console.log("데이터입니다!!", data);
                                    const tokenId = ((_d = data.tokenId) === null || _d === void 0 ? void 0 : _d.toString()) || "";
                                    const name = data.name || "";
                                    const Owner = value.owner || "";
                                    const address = data.address || "";
                                    const isDuplicate = yield NFT_service_2.default.isDuplicateNFT(tokenId, address, Owner);
                                    console.log("중복인가?", isDuplicate, tmparr);
                                    //중복이 아니면 추가한다.
                                    if (!isDuplicate) {
                                        // tmparr.push(data);
                                        if (data.transactionhash) {
                                            const txDataid = yield Tx_service_1.default.getFindone(data.transactionhash);
                                            try {
                                                yield NFT_service_1.default.createNFTTest(data, txDataid === null || txDataid === void 0 ? void 0 : txDataid.dataValues.id);
                                            }
                                            catch (error) {
                                                console.log("getnftinfo", error);
                                            }
                                        }
                                    }
                                }
                                catch (error) {
                                    console.log("getnftinfo", error);
                                }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_e && !_a && (_b = result_1.return)) yield _b.call(result_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // console.log("!@#!@#!", tmparr);
            // if (tmparr.length > 0) {
            //   for (const data of tmparr) {
            //     if (data.transactionhash) {
            //       const txDataid = await TxService.getFindone(data.transactionhash);
            //       try {
            //         await NFTservice.createNFTTest(data, txDataid?.dataValues.id);
            //       } catch (error) {
            //         console.log("getnftinfo", error);
            //       }
            //     }
            //   }
            // }
        }
    }
    catch (error) {
        console.log("getnftinfo", error);
    }
});
exports.getnftinfo = getnftinfo;
function fetchDataWithDelay(tokenURI) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // URL을 구문 분석하고 유효성을 확인
            const parsedUrl = new url_1.URL(tokenURI);
            console.log("fetchDataWithDelay", tokenURI);
            yield new Promise((resolve) => setTimeout(resolve, 1000));
            const response = yield fetch(tokenURI);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Failed to fetch data:", error);
            const errresponse = {
                name: `Failed to fetch data`,
                description: "Failed to fetch data",
                imageUrl: "failed",
            };
            return errresponse;
        }
    });
}
