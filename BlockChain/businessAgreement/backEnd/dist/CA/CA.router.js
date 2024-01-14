"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CA_controller_1 = __importDefault(require("./CA.controller"));
const router = express_1.default.Router();
router.get("/:id", CA_controller_1.default.ViewOneCA);
router.put("/", CA_controller_1.default.UpdateCA);
router.get('/find/:address', CA_controller_1.default.FindCA);
exports.default = router;
