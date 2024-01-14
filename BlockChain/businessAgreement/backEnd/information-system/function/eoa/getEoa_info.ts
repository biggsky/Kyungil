import { getProvider } from "../config";
import { readjson } from "../collector/getAbiAndAddress";
import { DIRNAME } from "../../JSON";
import path from "path";
import EOAService from "../../../EOA/EOA.service";
import CAService from "../../../CA/CA.service";
export const getEoainfo = async () => {
  const jsonFilePath = path.join(DIRNAME, "erc20public.json");
  const jsonData = await readjson(jsonFilePath);
  const web3 = await getProvider();
  const result = await EOAService.getEoall();
  try {
    if (result !== undefined) {
      for (const value of result) {
        const result = await web3.eth.getBalance(value.dataValues.address);
        console.log("getEoainfo", result);
        EOAService.updateEoaethBalance(value.dataValues.address, result);
        const contract = new web3.eth.Contract(
          jsonData,
          value.dataValues.address
        );
        const cm = contract.methods as any;
      }
    }
  } catch (error) {
    console.log("getEoainfo", error);
  }
  // try {
  //   const CAresult = await CAService.findTxByCAType("erc-20");

  //   console.log("getEoainfo", CAresult[0].dataValues.txs);
  // } catch (error) {
  //   console.log("getEoainfo", error);
  // }
};
