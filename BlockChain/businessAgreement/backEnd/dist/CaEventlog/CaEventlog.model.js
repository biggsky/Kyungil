"use strict";
// CAEventLog.model.ts
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
exports.CAEventLog = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const CA_model_1 = require("../CA/CA.model");
const Event_log_model_1 = require("../Eventlog/Event_log.model");
let CAEventLog = class CAEventLog extends sequelize_typescript_1.Model {
};
exports.CAEventLog = CAEventLog;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CA_model_1.CA),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CAEventLog.prototype, "caId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Event_log_model_1.EventLog),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CAEventLog.prototype, "eventLogId", void 0);
exports.CAEventLog = CAEventLog = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        underscored: false,
        modelName: "CAEventLog",
        tableName: "caEventLogs",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
    })
], CAEventLog);
