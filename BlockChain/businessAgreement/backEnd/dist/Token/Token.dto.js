"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class TokenDTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.contractAddress = body.contractAddress;
        this.name = body.name;
        this.symbol = body.symbol;
        this.ownerAddress = body.ownerAddress;
        this.decimal = body.decimal;
        this.circulatingSupply = body.circulatingSupply;
        this.createDTO(this);
    }
}
exports.default = TokenDTO;
