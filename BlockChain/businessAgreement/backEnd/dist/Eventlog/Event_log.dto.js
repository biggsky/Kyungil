"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class Event_logDTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.address = body.address;
        this.blockHash = body.blockHash;
        this.blockNumber = body.blockNumber;
        this.data = body.data;
        this.logIndex = body.logIndex;
        this.removed = body.removed;
        this.transactionHash = body.transactionHash;
        this.transactionIndex = body.transactionIndex;
        this.event = body.event;
        this.signature = body.signature;
        this.topics = body.topics;
        this.returnValues = body.returnValues;
        this.createDTO(this);
    }
}
exports.default = Event_logDTO;
