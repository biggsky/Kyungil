import Web3 from "web3";
import dotenv from "dotenv";
import "dotenv/config";
let cachedWeb3Instance: any;

export const getRPC_URLtest = async () => {
  dotenv.config();

  const RPC_RRLtest = process.env.RPC_RRL || "RPC_RRLtest값이 읽히지않음";
  console.log(RPC_RRLtest);
  return RPC_RRLtest;
};

export const getProvider = async () => {
  if (cachedWeb3Instance) {
    // 이미 캐시된 인스턴스가 있는 경우, 해당 인스턴스를 반환
    return cachedWeb3Instance;
  }

  const RPC_URL = await getRPC_URLtest();

  if (RPC_URL == "https://network.bouncecode.net/") {
    cachedWeb3Instance = new Web3(new Web3.providers.HttpProvider(RPC_URL));
  } else {
    cachedWeb3Instance = new Web3(
      new Web3.providers.WebsocketProvider(RPC_URL)
    );
  }

  return cachedWeb3Instance;
};
