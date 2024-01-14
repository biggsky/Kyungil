"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class EOADTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.address = body.address;
        this.token = body.token;
        this.ethBalance = body.ethBalance;
        this.createDTO(this);
    }
}
exports.default = EOADTO;
