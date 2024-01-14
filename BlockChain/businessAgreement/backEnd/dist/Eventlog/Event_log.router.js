"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Event_log_controller_1 = __importDefault(require("./Event_log.controller"));
const router = express_1.default.Router();
router.get("/:id", Event_log_controller_1.default.ViewOneEventlog);
router.get("/find/:address", Event_log_controller_1.default.ViewAllEventlog);
exports.default = router;
