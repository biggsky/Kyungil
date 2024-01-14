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
exports.getProvider = exports.getRPC_URLtest = void 0;
const web3_1 = __importDefault(require("web3"));
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv/config");
let cachedWeb3Instance;
const getRPC_URLtest = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    const RPC_RRLtest = process.env.RPC_RRL || "RPC_RRLtest값이 읽히지않음";
    console.log(RPC_RRLtest);
    return RPC_RRLtest;
});
exports.getRPC_URLtest = getRPC_URLtest;
const getProvider = () => __awaiter(void 0, void 0, void 0, function* () {
    if (cachedWeb3Instance) {
        // 이미 캐시된 인스턴스가 있는 경우, 해당 인스턴스를 반환
        return cachedWeb3Instance;
    }
    const RPC_URL = yield (0, exports.getRPC_URLtest)();
    if (RPC_URL == "https://network.bouncecode.net/") {
        cachedWeb3Instance = new web3_1.default(new web3_1.default.providers.HttpProvider(RPC_URL));
    }
    else {
        cachedWeb3Instance = new web3_1.default(new web3_1.default.providers.WebsocketProvider(RPC_URL));
    }
    return cachedWeb3Instance;
});
exports.getProvider = getProvider;
