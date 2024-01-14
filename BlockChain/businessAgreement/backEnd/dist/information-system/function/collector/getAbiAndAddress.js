"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.saveABIandAddress = exports.readjson = void 0;
const fs = __importStar(require("fs"));
const config_1 = require("../config");
const JSON_1 = require("../../JSON");
const path_1 = __importDefault(require("path"));
const readjson = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                console.error("파일을 읽을 수 없습니다: ", error);
                reject(error); // Promise를 실패 상태로 변경
            }
            else {
                try {
                    const jsonData = JSON.parse(data);
                    // console.log("JSON 파일 내용: ", jsonData);
                    // 이제 jsonData를 사용할 수 있습니다.
                    resolve(jsonData); // Promise를 성공 상태로 변경
                }
                catch (parseError) {
                    console.error("JSON 파싱 오류: ", parseError);
                    reject(parseError); // Promise를 실패 상태로 변경
                }
            }
        });
    });
});
exports.readjson = readjson;
const saveABIandAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    const contractAddress2 = "0x39A9B4456651db823Ff19fB341E591ae153AdB17";
    const web3 = yield (0, config_1.getProvider)();
    const jsonFilePath = path_1.default.join(JSON_1.DIRNAME, "test.json");
    const jsonData = yield (0, exports.readjson)(jsonFilePath);
    const arr = [];
    const namearr = [];
    for (let i = 0; i < jsonData.length; i++) {
        try {
            if (jsonData[i].type === "constructor" ||
                jsonData[i].type === "event" ||
                jsonData[i].name == null ||
                jsonData[i].type === "error") {
                continue;
            }
            else {
                namearr.push(jsonData[i].name);
                arr.push(web3.eth.abi.encodeFunctionSignature(jsonData[i]));
            }
        }
        catch (error) {
            // console.log(error);
        }
    }
    console.log("result", arr, namearr);
});
exports.saveABIandAddress = saveABIandAddress;
// const
