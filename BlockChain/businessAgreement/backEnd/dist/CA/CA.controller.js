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
const CA_dto_1 = __importDefault(require("./CA.dto"));
const CA_service_1 = __importDefault(require("./CA.service"));
const CreateCA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqDTO = new CA_dto_1.default(req.body);
        yield CA_service_1.default.createCA(reqDTO, next);
        res.send();
    }
    catch (error) {
        next(error);
    }
});
const ViewOneCA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = yield CA_service_1.default.viewOneCA(id, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
const UpdateCA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const id = Number(req.params.id);
        const tempBodyData = req.body;
        const bodyData = Object.assign(Object.assign({}, tempBodyData), { abi: JSON.parse(tempBodyData.abi), abiSigniture: JSON.parse(tempBodyData.abiSigniture), signitureNames: JSON.parse(tempBodyData.signitureNames) });
        const data = new CA_dto_1.default(bodyData);
        yield CA_service_1.default.updateCA(data, next);
        res.send();
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const FindCA = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = req.params.address.toString();
        const data = yield CA_service_1.default.findCA(address, next);
        res.json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.default = { CreateCA, ViewOneCA, UpdateCA, FindCA };
