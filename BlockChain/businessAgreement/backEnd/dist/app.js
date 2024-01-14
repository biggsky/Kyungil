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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database"));
const NFT_router_1 = __importDefault(require("./NFT/NFT.router"));
const Token_router_1 = __importDefault(require("./Token/Token.router"));
const Tx_router_1 = __importDefault(require("./Tx/Tx.router"));
const Block_router_1 = __importDefault(require("./Block/Block.router"));
const EOA_router_1 = __importDefault(require("./EOA/EOA.router"));
const CA_router_1 = __importDefault(require("./CA/CA.router"));
const Event_log_router_1 = __importDefault(require("./Eventlog/Event_log.router"));
const cors_1 = __importDefault(require("cors")); // cors 패키지 추가
const errorExcept_1 = require("./database/errorExcept");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "https://bouncexplorer.site",
}));
database_1.default.sync({ force: false })
    .then(() => {
    console.log("connect on");
})
    .catch((err) => {
    console.log(err);
});
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/eventlog", Event_log_router_1.default);
app.use("/nft", NFT_router_1.default);
app.use("/token", Token_router_1.default);
app.use("/tx", Tx_router_1.default);
app.use("/block", Block_router_1.default);
app.use("/eoa", EOA_router_1.default);
app.use("/ca", CA_router_1.default);
app.use(errorExcept_1.ErrorFn); // 예외처리 미들웨어
app.listen(8080, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("server open");
    // await saveABIandAddress();
    // await getnftinfo();
    // await getTokeninfo();
    // await getEoainfo();
    // await getBlockInfo(3404791);
    // await getallblock();
    // await EOAService.findTxByEOA();
    // await getToken_by_user();
    // if ((await getRPC_URLtest()) === "https://network.bouncecode.net/") {
    //   CollectStart_http();
    // } else {
    //   subscribetest();
    // }
    console.log("테스트 구문 끝");
}));
