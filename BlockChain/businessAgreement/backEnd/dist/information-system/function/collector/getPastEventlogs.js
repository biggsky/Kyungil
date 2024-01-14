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
exports.getPasteventlogs = void 0;
const path_1 = __importDefault(require("path"));
const JSON_1 = require("../../JSON");
const getAbiAndAddress_1 = require("./getAbiAndAddress");
const config_1 = require("../config");
const Event_log_service_1 = __importDefault(require("../../../Eventlog/Event_log.service"));
const CaEventlog_service_1 = require("../../../CaEventlog/CaEventlog.service");
// const RPC_URL =
//   "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";
// const RPC_URL = "https://network.bouncecode.net/";
// const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
// const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL));
const getPasteventlogs = (address, type, caId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const web3 = yield (0, config_1.getProvider)();
        let jsonname = "";
        switch (type) {
            case "erc-20":
                jsonname = "erc20public";
                break;
            case "erc-721":
                jsonname = "erc721";
                break;
            case "erc-1155":
                jsonname = "erc1155";
                break;
            default:
                console.log("해당되지않음");
                break;
        }
        const jsonFilePath = path_1.default.join(JSON_1.DIRNAME, `${jsonname}.json`);
        const jsonData = yield (0, getAbiAndAddress_1.readjson)(jsonFilePath);
        const contract = yield new web3.eth.Contract(jsonData, address);
        // let tmparr: NFTData[] = [];
        const pastEvents = yield contract.getPastEvents("allEvents", {
            fromBlock: "latest",
            toBlock: "latest",
        });
        for (const pastEvent of pastEvents) {
            const result = yield Event_log_service_1.default.createEventlog(pastEvent);
            yield (0, CaEventlog_service_1.createCaEvnetlog)(caId, result === null || result === void 0 ? void 0 : result.dataValues.id);
        }
    }
    catch (error) {
        console.log("getPasteventlogs", error);
    }
});
exports.getPasteventlogs = getPasteventlogs;
