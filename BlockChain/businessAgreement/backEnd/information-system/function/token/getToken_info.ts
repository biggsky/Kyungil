import { readjson } from "../collector/getAbiAndAddress";
import { getProvider } from "../config";
import CAservice from "../../../CA/CA.service";
import Tokenservice from "../../../Token/Token.service";
import { TokenData } from "../../../Token/Token.model";
import * as path from "path";
import { DIRNAME } from "../../JSON";

export const getTokeninfo = async () => {
  const web3 = await getProvider();
  let jsonData;
  let address;
  let tmparr = [];
  const result = await CAservice.findCAtype();
  if (result !== undefined) {
    for (let i = 0; i < result.length; i++) {
      address = result[i].dataValues.address;
      const db_result = await Tokenservice.isExist(address);
      // console.log(db_result);
      if (db_result !== undefined && db_result !== null ? true : false) {
        console.log("이미있는 토큰인데수웅");
        continue;
      }
      if (result[i].dataValues.CAtype == ``) {
        continue;
      } else if (result[i].dataValues.CAtype == `erc-20`) {
        const jsonFilePath = path.join(DIRNAME, "erc20.json");

        const jsonData = await readjson(jsonFilePath);

        tmparr.push({
          index: i,
          address: address,
          jsonData: jsonData,
          contract_Adress: db_result?.dataValues.contract_address,
          // 추가 필요한 다른 속성도 여기에 추가할 수 있음
        });
      } else if (result[i].dataValues.CAtype == `erc-721`) {
        const jsonFilePath = path.join(DIRNAME, "erc721.json");

        const jsonData = await readjson(jsonFilePath);

        tmparr.push({
          index: i,
          address: address,
          jsonData: jsonData,
          contract_Adress: db_result?.dataValues.contract_address,

          // 추가 필요한 다른 속성도 여기에 추가할 수 있음
        });
      } else if (result[i].dataValues.CAtype == `erc-1155`) {
        const jsonFilePath = path.join(DIRNAME, "erc1155.json");

        const jsonData = await readjson(jsonFilePath);

        tmparr.push({
          index: i,
          address: address,
          jsonData: jsonData,
          contract_Adress: db_result?.dataValues.contract_address,

          // 추가 필요한 다른 속성도 여기에 추가할 수 있음
        });
      }
    }
  }

  tmparr.forEach(async (value) => {
    const contract = new web3.eth.Contract(value.jsonData, value.address);
    try {
      const data: TokenData = {
        name: await contract.methods.name().call(),
        contractAddress: value.address,
        symbol: await contract.methods.symbol().call(),
        ownerAddress: "",
        decimal: await contract.methods.decimals().call(),
        circulatingSupply: await contract.methods.totalSupply().call(),
      };
      Tokenservice.createTokentest(data, value.contract_Adress);
    } catch (error) {
      console.error(" 오류 발생:", error);
    }
  });
};

// getTokeninfo();
