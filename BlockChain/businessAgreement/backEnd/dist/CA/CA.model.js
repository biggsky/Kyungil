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
exports.CA = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const TxCA_model_1 = require("../TxCA/TxCA.model");
const Tx_model_1 = require("../Tx/Tx.model");
const Event_log_model_1 = require("../Eventlog/Event_log.model");
const CaEventlog_model_1 = require("../CaEventlog/CaEventlog.model");
let CA = class CA extends sequelize_typescript_1.Model {
};
exports.CA = CA;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(150),
        allowNull: false,
    }),
    __metadata("design:type", String)
], CA.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], CA.prototype, "CAtype", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT),
        allowNull: false,
    }),
    __metadata("design:type", Array)
], CA.prototype, "abiSigniture", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT),
        allowNull: false,
    }),
    __metadata("design:type", Array)
], CA.prototype, "signitureNames", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.JSON,
        allowNull: true,
    }),
    __metadata("design:type", Object)
], CA.prototype, "abi", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Tx_model_1.Tx, () => TxCA_model_1.TxCA),
    __metadata("design:type", Array)
], CA.prototype, "txs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Event_log_model_1.EventLog, () => CaEventlog_model_1.CAEventLog),
    __metadata("design:type", Array)
], CA.prototype, "eventLogs", void 0);
exports.CA = CA = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "CA",
        tableName: "CAs",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], CA);
