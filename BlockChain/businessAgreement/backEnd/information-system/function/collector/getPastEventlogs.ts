import path from "path";
import Web3 from "web3";
import { DIRNAME } from "../../JSON";
import { readjson } from "./getAbiAndAddress";
import { getProvider } from "../config";
import Event_logService from "../../../Eventlog/Event_log.service";
import { createCaEvnetlog } from "../../../CaEventlog/CaEventlog.service";
// const RPC_URL =
//   "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";
// const RPC_URL = "https://network.bouncecode.net/";
// const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
// const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL));

export const getPasteventlogs = async (
  address: string,
  type: string,
  caId: number
) => {
  try {
    const web3 = await getProvider();
    let jsonname: string = "";
    switch (type) {
      case "erc-20":
        jsonname = "erc20public";
        break;
      case "erc-721":
        jsonname = "erc721";
        break;
      case "erc-1155":
        jsonname = "erc1155";
        break;

      default:
        console.log("해당되지않음");
        break;
    }
    const jsonFilePath = path.join(DIRNAME, `${jsonname}.json`);
    const jsonData = await readjson(jsonFilePath);
    const contract = await new web3.eth.Contract(jsonData, address);

    // let tmparr: NFTData[] = [];
    const pastEvents: any = await contract.getPastEvents("allEvents", {
      fromBlock: "latest",
      toBlock: "latest",
    });
    for (const pastEvent of pastEvents) {
      const result = await Event_logService.createEventlog(pastEvent);
      await createCaEvnetlog(caId, result?.dataValues.id);
    }
  } catch (error) {
    console.log("getPasteventlogs", error);
  }
};
