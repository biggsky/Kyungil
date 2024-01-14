"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDTO_1 = require("../database/baseDTO");
class NFTDTO extends baseDTO_1.BaseDTO {
    constructor(body) {
        super();
        this.tokenId = body.tokenId || "";
        this.name = body.name || "";
        this.description = body.description || "";
        this.imageUrl = body.imageUrl || "";
        this.creatorAddress = body.creatorAddress || "";
        this.Owner = body.Owner || "";
        this.createDTO(this);
    }
}
exports.default = NFTDTO;
