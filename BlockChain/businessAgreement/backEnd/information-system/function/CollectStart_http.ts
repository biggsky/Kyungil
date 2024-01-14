import { Queue } from "./queue/getQueue";
import { analyzeData } from "./analyzer/analyzeData";
import { getProvider } from "./config";
import { getTokeninfo } from "./token/getToken_info";
import { getnftinfo } from "./nft/getnft_info";
import { getEoainfo } from "./eoa/getEoa_info";
import { getToken_by_user } from "./token/geToken_by_user";

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
}
const myQueue = new Queue<BlockData>();
let hahah: any;
const ANALYZE_INTERVAL = 2000;
const TOKEN_INFO_INTERVAL = 300000;
const NFT_INFO_INTERVAL = 500000;
const EOAINFO_INTERVAL = 700000;
const TOKEN_BY_USER_INTERVAL = 400000;

export const CollectStart_http = async () => {
  const web3 = await getProvider();
  let analyzeDatajudgement: boolean[] = new Array(5).fill(true);
  let latestBlock: BlockData;
  let tmpblock: BlockData;

  try {
    latestBlock = await web3.eth.getBlock("latest", true);

    const analyzeLoop = async () => {
      tmpblock = await web3.eth.getBlock("latest", true);

      if (latestBlock.number !== tmpblock.number) {
        console.log("응애");
        latestBlock = tmpblock;
        myQueue.enqueue(latestBlock);
        console.log(myQueue.size());

        for (let i = 0; i < analyzeDatajudgement.length; i++) {
          if (analyzeDatajudgement[i]) {
            analyzeDatajudgement[i] = false;
            analyzeDatajudgement[i] = await processDataQueue();
          }
        }
      }

      setTimeout(analyzeLoop, ANALYZE_INTERVAL);
    };

    setTimeout(analyzeLoop, ANALYZE_INTERVAL);
    setInterval(async () => {
      await getTokeninfo();
    }, TOKEN_INFO_INTERVAL);

    setInterval(async () => {
      await getnftinfo();
    }, NFT_INFO_INTERVAL);

    setInterval(async () => {
      await getEoainfo();
    }, EOAINFO_INTERVAL);
    setInterval(async () => {
      await getToken_by_user();
    }, TOKEN_BY_USER_INTERVAL);
  } catch (error) {
    console.error("Error:", error);
  }
};

// processDataQueue 함수 수정
async function processDataQueue() {
  console.log("processDataQueue 실행되었음!");
  const data = myQueue.dequeue();

  if (data !== undefined && data !== null) {
    try {
      await analyzeData(data);
      return true;
    } catch (error) {
      console.error("Error in analyzeData:", error);
      return false;
    }
  } else {
    console.log("블록 데이터가 없다. 다시 대기 상태로 만들어주기");
    return true;
  }
}
