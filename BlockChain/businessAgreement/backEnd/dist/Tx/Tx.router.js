"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Tx_controller_1 = __importDefault(require("./Tx.controller"));
const router = express_1.default.Router();
router.get('/', Tx_controller_1.default.ViewAllTxs);
router.get('/:id', Tx_controller_1.default.ViewOneTx);
router.get('/find/:hash', Tx_controller_1.default.FindTx);
exports.default = router;
