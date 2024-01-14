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
exports.TxCA = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Tx_model_1 = require("../Tx/Tx.model");
const CA_model_1 = require("../CA/CA.model");
let TxCA = class TxCA extends sequelize_typescript_1.Model {
};
exports.TxCA = TxCA;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tx_model_1.Tx),
    sequelize_typescript_1.Column // 여기서 field를 사용하여 외래 키의 컬럼명을 명시
    ,
    __metadata("design:type", Number)
], TxCA.prototype, "txId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CA_model_1.CA),
    sequelize_typescript_1.Column // 여기서 field를 사용하여 외래 키의 컬럼명을 명시
    ,
    __metadata("design:type", Number)
], TxCA.prototype, "caId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Tx_model_1.Tx),
    __metadata("design:type", Tx_model_1.Tx)
], TxCA.prototype, "tx", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CA_model_1.CA),
    __metadata("design:type", CA_model_1.CA)
], TxCA.prototype, "ca", void 0);
exports.TxCA = TxCA = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        modelName: "TxCA",
        tableName: "tx_ca",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], TxCA);
