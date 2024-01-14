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
exports.EOA = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Tx_model_1 = require("../Tx/Tx.model");
const TxEOA_model_1 = require("../TxEOA/TxEOA.model");
const Token_model_1 = require("../Token/Token.model");
const Token_EOA_model_1 = require("../TokenEoa/Token_EOA.model");
let EOA = class EOA extends sequelize_typescript_1.Model {
};
exports.EOA = EOA;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: false,
    }),
    __metadata("design:type", String)
], EOA.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], EOA.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], EOA.prototype, "ethBalance", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Tx_model_1.Tx, () => TxEOA_model_1.TxEOA),
    __metadata("design:type", Array)
], EOA.prototype, "txs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Token_model_1.Token, () => Token_EOA_model_1.TokenEOA),
    __metadata("design:type", Array)
], EOA.prototype, "tokens", void 0);
exports.EOA = EOA = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "EOA",
        tableName: "eoas",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], EOA);
