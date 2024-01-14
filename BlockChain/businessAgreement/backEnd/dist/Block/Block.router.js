"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Block_controller_1 = __importDefault(require("./Block.controller"));
const router = express_1.default.Router();
router.get('/', Block_controller_1.default.ViewAllBlocks);
router.get('/:id', Block_controller_1.default.ViewOneBlock);
router.get('/find/:number', Block_controller_1.default.FindBlockNum);
exports.default = router;
