"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class CADTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.address = body.address;
        this.abiSigniture = body.abiSigniture;
        this.signitureNames = body.signitureNames;
        this.CAtype = body.CAtype;
        this.abi = body.abi;
        this.createDTO(this);
    }
}
exports.default = CADTO;
