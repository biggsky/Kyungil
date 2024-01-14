import { hash } from "bcrypt";
import db from "../../../database";
import CAServices from "../../../CA/CA.service";
import EOAServices from "../../../EOA/EOA.service";
import { CAData } from "../../../CA/CA.model";
import { EOAData } from "../../../EOA/EOA.model";
import {
  signitureERC20public,
  signiturenameERC20public,
  signiturenameERC721public,
  signitureERC721public,
  signitureERC1155,
  signiturenameERC1155,
} from "../../Sig_abi_Arrary/sigInterface";
import { getPasteventlogs } from "../collector/getPastEventlogs";

export const getAddresstype = async (
  hash: string,
  addressType: string,
  sigEvaluateresult?: string
) => {
  try {
    if (addressType === "contract") {
      const result = await db.models.CA.findOne({
        where: {
          address: hash,
        },
      });

      let CAdata: CAData;
      console.log(sigEvaluateresult);
      if (sigEvaluateresult?.startsWith("erc-20")) {
        CAdata = {
          CAtype: "erc-20",
          address: hash,
          abiSigniture: signitureERC20public,
          signitureNames: signiturenameERC20public,
        };
      } else if (sigEvaluateresult?.startsWith("erc-721")) {
        CAdata = {
          CAtype: "erc-721",
          address: hash,
          abiSigniture: signitureERC721public,
          signitureNames: signiturenameERC721public,
        };
      } else if (sigEvaluateresult?.startsWith("erc-1155")) {
        CAdata = {
          CAtype: "erc-1155",
          address: hash,
          abiSigniture: signitureERC1155,
          signitureNames: signiturenameERC1155,
        };
      } else {
        CAdata = {
          CAtype: "",
          address: hash,
          abiSigniture: [""],
          signitureNames: [""],
        };
      }
      let result2dbinfo: any;

      // if (!result) {
      //   const result2dbinfo = await CAServices.createCATest(CAdata);
      //   console.log("!@#!@#", result2dbinfo);
      //   return result2dbinfo;
      // } else console.log("이미있구만유");
      !result
        ? (result2dbinfo = await CAServices.createCATest(CAdata))
        : console.log("이미있구만유");

      // console.log(result2dbinfo);
      if (!result) {
        if (CAdata.CAtype !== "") {
          // console.log("!@#!@#!#", result2dbinfo);
          await getPasteventlogs(
            CAdata.address,
            CAdata.CAtype,
            result2dbinfo.dataValues.id
          );
        }

        return result2dbinfo;
      } else {
        return result;
      }
    } else {
      const result = await db.models.EOA.findOne({
        where: {
          address: hash,
        },
      });

      let eoadata: EOAData = {
        address: hash,
        token: BigInt(0),
        ethBalance: "",
      };
      let result2dbinfo: any;

      !result
        ? (result2dbinfo = await EOAServices.createEOATest(eoadata))
        : console.log("이미있구만유");
      // console.log(result2dbinfo);

      if (!result) {
        return result2dbinfo;
      } else {
        return result;
      }
    }
  } catch (error) {
    console.error("에러 발생:", error);
  }
};
