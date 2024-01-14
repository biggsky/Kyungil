"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class TxDTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.accessList = body.accessList;
        this.chainId = body.chainId;
        this.from = body.from;
        this.gas = body.gas;
        this.gasPrice = body.gasPrice;
        this.hash = body.hash;
        this.input = body.input;
        this.maxFeePerGas = body.maxFeePerGas;
        this.maxPriorityFeePerGas = body.maxPriorityFeePerGas;
        this.r = body.r;
        this.s = body.s;
        this.to = body.to;
        this.transactionIndex = body.transactionIndex;
        this.type = body.type;
        this.v = body.v;
        this.value = body.value;
        this.Method = body.Method;
        this.Timestamp = body.Timestamp;
        this.blocknumber = body.blocknumber;
        this.createDTO(this);
    }
}
exports.default = TxDTO;
