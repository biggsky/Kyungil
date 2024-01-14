export interface ITransactionResponseItemData {
  id: string;
  accessList: string[];
  chainId: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  Method: string;
  Timestamp: string;
  blocknumber: string;
  createdAt: string;
  updatedAt: string;
  NFT_id: string | null;
  token_id: string | null;
  block_id: string;
}

export interface ITransactionItemData {
  txHash: string;
  status: boolean;
  timeStamp: string;
  method: string;
  from: string;
  to: string;
  value: string;
  NFT_id: string | null;
  token_id: string | null;
  block_id: string;
  transactionFee: string;
  gas: string;
  gasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  eventLog: IEventLogData[];
  input:string
}
export interface IEventLogData {
  id: number;
  address: string;
  blockHash: string;
  blockNumber: string;
  data: string;
  logIndex: string;
  removed: boolean;
  transactionHash: string;
  transactionIndex: number;
  event: string;
  signature: string;
  topics: string;
  returnValues: string;
  createdAt: string;
  updatedAt: string;
}
