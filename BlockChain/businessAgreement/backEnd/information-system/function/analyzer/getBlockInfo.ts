import Web3 from "web3";
import { getProvider } from "../config";

// Sepolia 테스트넷의 WebSocket RPC URL 설정
// const RPC_URL =
//   "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";

// // Web3 인스턴스 생성
// const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL));

export interface EthereumBlock {
  baseFeePerGas?: bigint;
  difficulty?: bigint;
  extraData?: string;
  gasLimit?: bigint;
  gasUsed?: bigint;
  hash?: string;
  logsBloom?: string;
  miner?: string;
  mixHash?: string;
  nonce?: bigint;
  number?: bigint;
  parentHash?: string;
  receiptsRoot?: string;
  sha3Uncles?: string;
  size?: bigint;
  stateRoot?: string;
  timestamp?: bigint;
  totalDifficulty?: bigint;
  transactions?: EthereumTransaction[];
}

interface EthereumTransaction {
  accessList?: any[]; // 여기에 accessList의 구체적인 타입을 추가해야 합니다.
  blockHash?: string;
  blockNumber?: bigint;
  chainId?: bigint;
  from?: string;
  gas?: bigint;
  gasPrice?: bigint;
  hash?: string;
  input?: string;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  nonce?: bigint;
  r?: string;
  s?: string;
  to?: string;
  transactionIndex?: bigint;
  type?: bigint;
  v?: bigint;
  value?: bigint;
}

// accessList에 대한 구체적인 내용을 알려주시면 해당 부분을 업데이트할 수 있습니다.
export async function getBlockInfo(blockNumber: number) {
  const web3 = await getProvider();

  try {
    // 특정 블록의 정보 가져오기
    const block = await web3.eth.getBlock(blockNumber, true);

    if (block) {
      if (block.transactions) {
        // console.log(block.transactions);
      }
      return block;
    } else {
      console.log("블록을 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// 가져올 블록 번호를 지정합니다.
// const blockNumberToRetrieve = 3404791; // 원하는 블록 번호로 변경

// // 특정 블록 정보 가져오기
// getBlockInfo(blockNumberToRetrieve);
