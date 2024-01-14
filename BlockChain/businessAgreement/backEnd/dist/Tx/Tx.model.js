"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tx = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const NFT_model_1 = require("../NFT/NFT.model");
const Token_model_1 = require("../Token/Token.model");
const Block_model_1 = require("../Block/Block.model");
const TxCA_model_1 = require("../TxCA/TxCA.model");
const TxEOA_model_1 = require("../TxEOA/TxEOA.model");
const CA_model_1 = require("../CA/CA.model");
const EOA_model_1 = require("../EOA/EOA.model");
let Tx = class Tx extends sequelize_typescript_1.Model {
};
exports.Tx = Tx;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT),
        allowNull: true,
    }),
    __metadata("design:type", Array)
], Tx.prototype, "accessList", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: true,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "chainId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "from", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "gasPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "hash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "input", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: true,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "maxFeePerGas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: true,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "maxPriorityFeePerGas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "r", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "s", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "to", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "transactionIndex", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "v", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Tx.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true, // 테스트용으로 잠시 true로 한다
    }),
    __metadata("design:type", String)
], Tx.prototype, "Method", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: true, // 테스트용으로 잠시 true로 한다
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tx.prototype, "Timestamp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Tx.prototype, "blocknumber", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => NFT_model_1.NFT, "NFT_id"),
    __metadata("design:type", NFT_model_1.NFT)
], Tx.prototype, "nft", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Token_model_1.Token, "token_id"),
    __metadata("design:type", Token_model_1.Token)
], Tx.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Block_model_1.Block, "block_id"),
    __metadata("design:type", Block_model_1.Block)
], Tx.prototype, "block", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => CA_model_1.CA, () => TxCA_model_1.TxCA),
    __metadata("design:type", Array)
], Tx.prototype, "cas", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => EOA_model_1.EOA, () => TxEOA_model_1.TxEOA),
    __metadata("design:type", Array)
], Tx.prototype, "eoas", void 0);
exports.Tx = Tx = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "Tx",
        tableName: "txs",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], Tx);
