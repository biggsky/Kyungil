"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database = process.env.DATABASE_NAME || "";
const username = process.env.DATABASE_USERNAME || "";
const password = process.env.DATABASE_PASSWORD || "";
const host = process.env.DATABASE_HOST || "";
const config = {
    dev: {
        database,
        username,
        password,
        host,
    },
};
console.log(config);
exports.default = config;
