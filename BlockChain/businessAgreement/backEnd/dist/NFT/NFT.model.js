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
exports.NFT = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Tx_model_1 = require("../Tx/Tx.model");
let NFT = class NFT extends sequelize_typescript_1.Model {
};
exports.NFT = NFT;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "tokenId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(200),
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "imageUrl", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "creatorAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(200),
        allowNull: true,
    }),
    __metadata("design:type", String)
], NFT.prototype, "Owner", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Tx_model_1.Tx, "NFT_id"),
    __metadata("design:type", Array)
], NFT.prototype, "txs", void 0);
exports.NFT = NFT = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "NFT",
        tableName: "nfts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], NFT);
