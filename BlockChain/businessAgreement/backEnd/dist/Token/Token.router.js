"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Token_controller_1 = __importDefault(require("./Token.controller"));
const router = express_1.default.Router();
router.get('/', Token_controller_1.default.ViewAllTokens);
router.get('/:id', Token_controller_1.default.ViewOneToken);
router.get('/find/:name', Token_controller_1.default.FindToken);
exports.default = router;
