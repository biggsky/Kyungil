import { Sequelize } from "sequelize-typescript";
import config from "./config";
import { NFT } from "../NFT/NFT.model";
import { Token } from "../Token/Token.model";
import { Tx } from "../Tx/Tx.model";
import { EOA } from "../EOA/EOA.model";
import { Block } from "../Block/Block.model";
import { CA } from "../CA/CA.model";
import { TxCA } from "../TxCA/TxCA.model";
import { TxEOA } from "../TxEOA/TxEOA.model";
import { EventLog } from "../Eventlog/Event_log.model";
import { CAEventLog } from "../CaEventlog/CaEventlog.model";
import { TokenEOA } from "../TokenEoa/Token_EOA.model";

const db = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  {
    host: config.dev.host,
    dialect: "postgres",
    models: [
      Tx,
      NFT,
      Token,
      EOA,
      CA,
      Block,
      TxCA,
      TxEOA,
      EventLog,
      CAEventLog,
      TokenEOA,
    ],
  }
);

export default db;
