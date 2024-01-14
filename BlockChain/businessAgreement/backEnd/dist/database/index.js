"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("./config"));
const NFT_model_1 = require("../NFT/NFT.model");
const Token_model_1 = require("../Token/Token.model");
const Tx_model_1 = require("../Tx/Tx.model");
const EOA_model_1 = require("../EOA/EOA.model");
const Block_model_1 = require("../Block/Block.model");
const CA_model_1 = require("../CA/CA.model");
const TxCA_model_1 = require("../TxCA/TxCA.model");
const TxEOA_model_1 = require("../TxEOA/TxEOA.model");
const Event_log_model_1 = require("../Eventlog/Event_log.model");
const CaEventlog_model_1 = require("../CaEventlog/CaEventlog.model");
const Token_EOA_model_1 = require("../TokenEoa/Token_EOA.model");
const db = new sequelize_typescript_1.Sequelize(config_1.default.dev.database, config_1.default.dev.username, config_1.default.dev.password, {
    host: config_1.default.dev.host,
    dialect: "postgres",
    models: [
        Tx_model_1.Tx,
        NFT_model_1.NFT,
        Token_model_1.Token,
        EOA_model_1.EOA,
        CA_model_1.CA,
        Block_model_1.Block,
        TxCA_model_1.TxCA,
        TxEOA_model_1.TxEOA,
        Event_log_model_1.EventLog,
        CaEventlog_model_1.CAEventLog,
        Token_EOA_model_1.TokenEOA,
    ],
});
exports.default = db;
