"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EOA_controller_1 = __importDefault(require("./EOA.controller"));
const router = express_1.default.Router();
router.get('/:id', EOA_controller_1.default.ViewOneEOA);
router.get('/find/:address', EOA_controller_1.default.FindEOA);
exports.default = router;
