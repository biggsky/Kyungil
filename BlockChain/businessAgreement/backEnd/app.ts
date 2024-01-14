import express from "express";
import dotenv from "dotenv";
import db from "./database";
import Web3 from "web3";
import nftRouter from "./NFT/NFT.router";
import tokenRouter from "./Token/Token.router";
import txRouter from "./Tx/Tx.router";
import blockRouter from "./Block/Block.router";
import EOARouter from "./EOA/EOA.router";
import CARouter from "./CA/CA.router";
import EventRouter from "./Eventlog/Event_log.router";
import cors from "cors"; // cors 패키지 추가
import { CollectStart_http } from "./information-system/function/CollectStart_http";
import { subscribetest } from "./information-system/function/CollectStart_websocket";
import { getRPC_URLtest } from "./information-system/function/config";
import { getnftinfo } from "./information-system/function/nft/getnft_info";
import { ErrorFn } from "./database/errorExcept";
import { getEoainfo } from "./information-system/function/eoa/getEoa_info";
import { saveABIandAddress } from "./information-system/function/collector/getAbiAndAddress";
import { getBlockInfo } from "./information-system/function/analyzer/getBlockInfo";
import { getallblock } from "./information-system/function/block/getAllblock";
import { getTokeninfo } from "./information-system/function/token/getToken_info";
import EOAService from "./EOA/EOA.service";
import { getToken_by_user } from "./information-system/function/token/geToken_by_user";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://bouncexplorer.site",
  })
);

db.sync({ force: false })
  .then(() => {
    console.log("connect on");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/eventlog", EventRouter);
app.use("/nft", nftRouter);
app.use("/token", tokenRouter);
app.use("/tx", txRouter);
app.use("/block", blockRouter);
app.use("/eoa", EOARouter);
app.use("/ca", CARouter);
app.use(ErrorFn); // 예외처리 미들웨어

app.listen(8080, async () => {
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
});
