import Web3 from "web3";
import { Queue } from "./queue/getQueue";
import { analyzeData } from "./analyzer/analyzeData";
import BlockServices from "../../Block/Block.service";
import { getTokeninfo } from "./token/getToken_info";
import { getnftinfo } from "./nft/getnft_info";
import { getProvider } from "./config";
import { getEoainfo } from "./eoa/getEoa_info";
import { getToken_by_user } from "./token/geToken_by_user";
// Sepolia 테스트넷의 WebSocket RPC URL 설정

// Web3 인스턴스 생성

export interface BlockData {
  number?: bigint;
  hash?: string; // 선택적으로 만들거나 'string'으로 지정
  parentHash?: string;
  sha3Uncles?: string;
  logsBloom?: string;
  transactionsRoot?: string;
  stateRoot?: string;
  receiptsRoot?: string;
  miner?: string;
  difficulty?: bigint;
  extraData?: string;
  gasLimit?: bigint;
  gasUsed?: bigint;
  timestamp?: bigint;
  baseFeePerGas?: bigint;
  withdrawalsRoot?: string; // 'withdrawalsRoot'를 선택적으로 변경
  nonce?: bigint;
  mixHash?: string;
  tnxsCount?: number;
}
const myQueue = new Queue<BlockData>();
let hahah: any;
export const subscribetest = async () => {
  const web3 = await getProvider();

  let analyzeDatajudgement: boolean[] = new Array(5).fill(true);
  let tmpblock: BlockData;

  try {
    const subscription = await web3.eth.subscribe(
      "newBlockHeaders",
      (error: Error, blockHeader: BlockData) => {
        if (!error) {
          console.log("Block Header:", blockHeader);
        } else {
          console.error("Error:", error);
        }
      }
    );

    // "data" 이벤트 처리
    subscription.on("data", async (data: any) => {
      myQueue.enqueue(data);
      console.log(myQueue.size());
      console.log(data);
      for (let i = 0; i < analyzeDatajudgement.length; i++) {
        if (analyzeDatajudgement[i] == true) {
          try {
            analyzeDatajudgement[i] = false;
            analyzeDatajudgement[i] = await processDataQueue();
          } catch (error) {}
        }
      }
    });

    setInterval(async () => {
      await getTokeninfo();
    }, 300000);
    setInterval(async () => {
      await getnftinfo();
    }, 500000);
    setInterval(async () => {
      await getEoainfo();
    }, 700000);
    setInterval(async () => {
      await getToken_by_user();
    }, 400000);
  } catch (error) {
    console.error("Error:", error);
  }
};
async function processDataQueue() {
  console.log("processDataQueue실행되었음!");
  const data = myQueue.dequeue();

  if (data !== undefined && data !== null) {
    // blockData가 정의되었을 때 수행할 작업
    // 예: blockData를 사용하는 로직
    // const relationshipinfo = await BlockServices.createBlocktest(data);
    // console.log("relationship", relationshipinfo);
    return await analyzeData(data);
  } else {
    // blockData가 정의되지 않았을 때 수행할 작업
    console.log("블록데이터가없다. 다시 대가상태로만들어주기");
    return true;
  }

  // 데이터 분석을 비동기적으로 수행
  // if (data) {
  // } else {
  // }
}

// setInterval(() => {
//   processDataQueue();
// }, 2000);
