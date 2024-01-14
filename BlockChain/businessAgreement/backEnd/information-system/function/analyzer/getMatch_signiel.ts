import Web3 from "web3";
import {
  signitureERC20,
  signiturenameERC20,
  signitureERC721,
  signiturenameERC721,
  signitureERC1155,
  signiturenameERC1155,
  signitureERC20public,
  signiturenameERC20public,
  signitureERC721public,
  signiturenameERC721public,
} from "../../Sig_abi_Arrary/sigInterface";
import { getProvider } from "../config";

export async function sigJudgemetTest(
  transactionhash: string
): Promise<string> {
  const web3 = await getProvider();

  const transaction = await web3.eth.getTransaction(transactionhash);

  const sig = transaction.input.slice(0, 10);
  // console.log(sig);
  // for (let i = 0; i < signitureERC20.length; i++) {
  //   if (signitureERC20[i] == sig) {
  //     const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
  //     // 전송하는 토큰의 양 (amount)
  //     const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
  //     console.log(`ERC-20 ${signiturenameERC20[i]} Detected:`);
  //     console.log("To Address:", toAddress);
  //     console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
  //     break;
  //   }
  // }
  // for (let i = 0; i < signitureERC721.length; i++) {
  //   if (signitureERC721[i] == sig) {
  //     const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
  //     // 전송하는 토큰의 양 (amount)
  //     const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
  //     console.log(`ERC-721 ${signiturenameERC721[i]} Detected:`);
  //     console.log("To Address:", toAddress);
  //     console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
  //     break;
  //   }
  for (let i = 0; i < signitureERC20public.length; i++) {
    if (signitureERC20public[i] == sig) {
      const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
      // 전송하는 토큰의 양 (amount)
      const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
      console.log(`ERC-20 public ${signiturenameERC20public[i]} Detected:`);
      console.log("To Address:", toAddress);
      console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
      return `erc-20,${sig},${signiturenameERC20public[i]},${toAddress},${value}`;
    }
  }
  for (let i = 0; i < signitureERC721public.length; i++) {
    if (signitureERC721public[i] == sig) {
      const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
      // 전송하는 토큰의 양 (amount)
      const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
      console.log(`ERC-721 ${signiturenameERC721public[i]} Detected:`);
      console.log("To Address:", toAddress);
      console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
      return `erc-721,${sig},${signiturenameERC721public[i]},${toAddress},${value}`;
    }
  }
  for (let i = 0; i < signitureERC1155.length; i++) {
    if (signitureERC1155[i] == sig) {
      const toAddress = "0x" + transaction.input.slice(34, 74); // 0x 뒤의 주소 부분
      // 전송하는 토큰의 양 (amount)
      const value = web3.utils.toBigInt("0x" + transaction.input.slice(74)); // 0x 뒤의 값 부분
      console.log(`ERC-1155 ${signiturenameERC1155[i]} Detected:`);
      console.log("To Address:", toAddress);
      console.log("Value:", web3.utils.fromWei(value, "ether"), "ETH"); // 값을 ETH로 변환
      return `erc-1155,${sig},${signiturenameERC1155[i]},${toAddress},${value}`;
    }
  }
  return sig;
}
