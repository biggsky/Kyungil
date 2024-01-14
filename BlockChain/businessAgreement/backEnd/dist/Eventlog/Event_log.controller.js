"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_log_service_1 = __importDefault(require("./Event_log.service"));
const ViewOneEventlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield Event_log_service_1.default.viewOneEventlog(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const ViewAllEventlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = req.params.address.toString();
        const data = yield Event_log_service_1.default.viewAllEventlog(address, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { ViewOneEventlog, ViewAllEventlog };
