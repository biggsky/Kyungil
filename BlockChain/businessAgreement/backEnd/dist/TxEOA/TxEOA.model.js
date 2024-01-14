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
exports.TxEOA = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Tx_model_1 = require("../Tx/Tx.model");
const EOA_model_1 = require("../EOA/EOA.model");
let TxEOA = class TxEOA extends sequelize_typescript_1.Model {
};
exports.TxEOA = TxEOA;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tx_model_1.Tx),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TxEOA.prototype, "txId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EOA_model_1.EOA),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TxEOA.prototype, "eoaId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Tx_model_1.Tx),
    __metadata("design:type", Tx_model_1.Tx)
], TxEOA.prototype, "tx", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EOA_model_1.EOA),
    __metadata("design:type", EOA_model_1.EOA)
], TxEOA.prototype, "eoa", void 0);
exports.TxEOA = TxEOA = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        modelName: "TxEOA",
        tableName: "tx_eoa",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], TxEOA);
