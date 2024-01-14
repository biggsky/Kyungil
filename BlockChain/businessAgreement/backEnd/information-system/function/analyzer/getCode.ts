import { getProvider } from "../config";

export async function isContract(hash: string): Promise<boolean> {
  const web3 = await getProvider();

  const code = await web3.eth.getCode(hash);
  return code !== "0x";
}

export async function determineAddressType(blockHash: string): Promise<string> {
  const isContractAddress = await isContract(blockHash);

  if (isContractAddress) {
    // console.log(blockHash + "는 스마트 컨트랙트 주소입니다.");
    return "contract";
  } else {
    // console.log(blockHash + "는 일반 이더리움 계정 주소입니다.");
    return "EOA";
  }
}
