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
exports.TokenEOA = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const EOA_model_1 = require("../EOA/EOA.model");
const Token_model_1 = require("../Token/Token.model");
let TokenEOA = class TokenEOA extends sequelize_typescript_1.Model {
};
exports.TokenEOA = TokenEOA;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => EOA_model_1.EOA),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TokenEOA.prototype, "eoaid", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Token_model_1.Token),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TokenEOA.prototype, "tokenid", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], TokenEOA.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: true,
    }),
    __metadata("design:type", String)
], TokenEOA.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: true,
    }),
    __metadata("design:type", String)
], TokenEOA.prototype, "symbol", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => EOA_model_1.EOA),
    __metadata("design:type", EOA_model_1.EOA)
], TokenEOA.prototype, "eoa", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Token_model_1.Token),
    __metadata("design:type", Token_model_1.Token)
], TokenEOA.prototype, "token", void 0);
exports.TokenEOA = TokenEOA = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "TokenEOA",
        tableName: "tokenEoas",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], TokenEOA);
