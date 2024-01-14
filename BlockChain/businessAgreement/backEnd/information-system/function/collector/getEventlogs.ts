import Web3 from "web3";

const contractAddress2: string = "0xd19dB9F1c36Fa67a5EF55D225e934Aa5fADC2247";

const RPC_URL =
  "wss://sepolia.infura.io/ws/v3/d22607d7f58545f99e3c0eadcbf00eb4";
// const RPC_URL = "https://network.bouncecode.net/";
// const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL));
interface EventLog {
  address: string;
  blockHash: string;
  blockNumber: bigint;
  data: string;
  logIndex: bigint;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  transactionIndex: bigint;
}
// readonly id?: string | undefined;
//       readonly removed?: boolean | undefined;
//       readonly logIndex?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly transactionIndex?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly transactionHash?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly blockHash?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly blockNumber?: import("web3-types").NumberTypes[ReturnFormat["number"]] | undefined;
//       readonly address?: string | undefined;
//       readonly data?: import("web3-types").ByteTypes[ReturnFormat["bytes"]] | undefined;
//       readonly topics?: import("web3-types").ByteTypes[ReturnFormat["bytes"]][]
const options = {
  fromBlock: "earliest", // 시작 블록
  toBlock: "latest", // 최신 블록

  address: `${contractAddress2}`, // 스마트 컨트랙트 주소
};

// // 트랜잭션을 검색
const getEventlogs = async () => {
  const resulting = await web3.eth.getPastLogs(options);
  console.log(options, resulting);
  for (let i = 0; i < resulting.length; i++) {
    const log = resulting[i]; // 결과에서 로그를 추출
    const logData: EventLog = typeof log === "string" ? JSON.parse(log) : log;

    console.log(logData.transactionHash); // 객체이므로 속성에 접근 가능
    const trans = await web3.eth.getTransaction(logData.transactionHash);
    console.log("trans######", trans);
    const block = await web3.eth.getBlock(trans.blockNumber);
    if (block) {
      const timestamp = new Date(Number(block.timestamp) * 1000); // 블록의 타임스탬프를 밀리초로 변환
      console.log("timestamp", timestamp);
    }
  }
};

getEventlogs();
