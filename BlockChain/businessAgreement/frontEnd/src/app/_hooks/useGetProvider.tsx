import React from "react";
import Web3 from "web3";

const useGetProvider = () => {
  const RPC_URL = "https://network.bouncecode.net/";

  const web3Instance = new Web3(new Web3.providers.HttpProvider(RPC_URL));

  return web3Instance;
};

export default useGetProvider;

// export async function isContract(hash: string): Promise<boolean> {
//   const web3 = await getProvider();

//   const code = await web3.eth.getCode(hash);
//   return code !== "0x";
// }

// export async function determineAddressType(blockHash: string): Promise<string> {
//   const isContractAddress = await isContract(blockHash);

//   if (isContractAddress) {
//     // console.log(blockHash + "는 스마트 컨트랙트 주소입니다.");
//     return "contract";
//   } else {
//     // console.log(blockHash + "는 일반 이더리움 계정 주소입니다.");
//     return "EOA";
//   }
// }
