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
exports.getAddresstype = void 0;
const database_1 = __importDefault(require("../../../database"));
const CA_service_1 = __importDefault(require("../../../CA/CA.service"));
const EOA_service_1 = __importDefault(require("../../../EOA/EOA.service"));
const sigInterface_1 = require("../../Sig_abi_Arrary/sigInterface");
const getPastEventlogs_1 = require("../collector/getPastEventlogs");
const getAddresstype = (hash, addressType, sigEvaluateresult) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (addressType === "contract") {
            const result = yield database_1.default.models.CA.findOne({
                where: {
                    address: hash,
                },
            });
            let CAdata;
            console.log(sigEvaluateresult);
            if (sigEvaluateresult === null || sigEvaluateresult === void 0 ? void 0 : sigEvaluateresult.startsWith("erc-20")) {
                CAdata = {
                    CAtype: "erc-20",
                    address: hash,
                    abiSigniture: sigInterface_1.signitureERC20public,
                    signitureNames: sigInterface_1.signiturenameERC20public,
                };
            }
            else if (sigEvaluateresult === null || sigEvaluateresult === void 0 ? void 0 : sigEvaluateresult.startsWith("erc-721")) {
                CAdata = {
                    CAtype: "erc-721",
                    address: hash,
                    abiSigniture: sigInterface_1.signitureERC721public,
                    signitureNames: sigInterface_1.signiturenameERC721public,
                };
            }
            else if (sigEvaluateresult === null || sigEvaluateresult === void 0 ? void 0 : sigEvaluateresult.startsWith("erc-1155")) {
                CAdata = {
                    CAtype: "erc-1155",
                    address: hash,
                    abiSigniture: sigInterface_1.signitureERC1155,
                    signitureNames: sigInterface_1.signiturenameERC1155,
                };
            }
            else {
                CAdata = {
                    CAtype: "",
                    address: hash,
                    abiSigniture: [""],
                    signitureNames: [""],
                };
            }
            let result2dbinfo;
            // if (!result) {
            //   const result2dbinfo = await CAServices.createCATest(CAdata);
            //   console.log("!@#!@#", result2dbinfo);
            //   return result2dbinfo;
            // } else console.log("이미있구만유");
            !result
                ? (result2dbinfo = yield CA_service_1.default.createCATest(CAdata))
                : console.log("이미있구만유");
            // console.log(result2dbinfo);
            if (!result) {
                if (CAdata.CAtype !== "") {
                    // console.log("!@#!@#!#", result2dbinfo);
                    yield (0, getPastEventlogs_1.getPasteventlogs)(CAdata.address, CAdata.CAtype, result2dbinfo.dataValues.id);
                }
                return result2dbinfo;
            }
            else {
                return result;
            }
        }
        else {
            const result = yield database_1.default.models.EOA.findOne({
                where: {
                    address: hash,
                },
            });
            let eoadata = {
                address: hash,
                token: BigInt(0),
                ethBalance: "",
            };
            let result2dbinfo;
            !result
                ? (result2dbinfo = yield EOA_service_1.default.createEOATest(eoadata))
                : console.log("이미있구만유");
            // console.log(result2dbinfo);
            if (!result) {
                return result2dbinfo;
            }
            else {
                return result;
            }
        }
    }
    catch (error) {
        console.error("에러 발생:", error);
    }
});
exports.getAddresstype = getAddresstype;
