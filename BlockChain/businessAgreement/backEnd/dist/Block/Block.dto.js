"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class BlockDTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.number = body.number;
        this.hash = body.hash;
        this.parentHash = body.parentHash;
        this.sha3Uncles = body.sha3Uncles;
        this.logsBloom = body.logsBloom;
        this.transactionsRoot = body.transactionsRoot;
        this.stateRoot = body.stateRoot;
        this.receiptsRoot = body.receiptsRoot;
        this.miner = body.miner;
        this.difficulty = body.difficulty;
        this.extraData = body.extraData;
        this.gasLimit = body.gasLimit;
        this.gasUsed = body.gasUsed;
        this.timestamp = body.timestamp;
        this.baseFeePerGas = body.baseFeePerGas;
        this.nonce = body.nonce;
        this.mixHash = body.mixHash;
        this.txcount = body.txcount;
        this.createDTO(this);
    }
}
exports.default = BlockDTO;
