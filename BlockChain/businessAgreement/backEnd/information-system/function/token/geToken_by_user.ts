import { readjson } from "../collector/getAbiAndAddress";
import { getProvider } from "../config";
import Tokenservice from "../../../Token/Token.service";
import * as path from "path";
import { DIRNAME } from "../../JSON";
import EOAService from "../../../EOA/EOA.service";
import Token_EOAService from "../../../TokenEoa/Token_EOA.service";
export const getToken_by_user = async () => {
  try {
    const web3 = await getProvider();
    const dbinfo: any = await Tokenservice.getAllTokens();
    const jsonFilePath = path.join(DIRNAME, "erc20.json");
    const jsonData = await readjson(jsonFilePath);

    if (dbinfo) {
      for (const token of dbinfo) {
        const myContract: any = new web3.eth.Contract(
          jsonData,
          token.dataValues.contractAddress
        );
        const cm = myContract.methods as any;

        for (const data of token.txs) {
          const result_FROM: any = await EOAService.findEOAone(
            data.dataValues.from
          );
          const result_TO: any = await EOAService.findEOAone(
            data.dataValues.to
          );

          if (result_FROM?.dataValues) {
            const balance = await cm.balanceOf(data.dataValues.from).call();
            const symbol = await cm.symbol().call();
            const name = await cm.name().call();
            console.log("가진토큰수result_FROM", name, balance);
            await Token_EOAService.createTokenEoa(
              token.dataValues.id,
              result_FROM.dataValues.id,
              balance,
              name,
              symbol
            );
          }

          if (result_TO?.dataValues) {
            const balance = await cm.balanceOf(data.dataValues.to).call();
            const symbol = await cm.symbol().call();
            const name = await cm.name().call();
            console.log("가진토큰수result_TO", balance);
            await Token_EOAService.createTokenEoa(
              token.dataValues.id,
              result_TO.dataValues.id,
              balance.toString(),
              name,
              symbol
            );
          }
        }
      }
    }
  } catch (err) {
    console.error("getToken_by_user error:", err);
  }
};
