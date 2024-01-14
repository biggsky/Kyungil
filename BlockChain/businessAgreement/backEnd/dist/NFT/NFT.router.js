"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NFT_controller_1 = __importDefault(require("./NFT.controller"));
const router = express_1.default.Router();
router.get('/', NFT_controller_1.default.ViewAllNFTs);
router.get('/:id', NFT_controller_1.default.ViewOneNFT);
exports.default = router;
