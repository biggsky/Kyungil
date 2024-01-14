import { IBlocksDataProps } from "@app/(page)/blocks/interface";
import { IBlocksItem, ITransactionsItem } from "@app/(page)/main/interface";
import { ItxList } from "@app/_components/transactionTable/interface";

export type IMainBlocksItem = IBlocksItem;

export type IListBLocksItem = IBlocksDataProps;

export interface IResponseBlockData {
  baseFeePerGas: string;
  createdAt: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  id: number;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  stateRoot: string;
  timestamp: string;
  transactionsRoot: string;
  updatedAt: string;
  withdrawalsRoot: string;
}

export type IMainTransactionData = ITransactionsItem;

export type IListTransactionData = ItxList;



export interface IResponseTransactionData {
  id: string;
  accessList: string;
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
  createdAt: string;
  updatedAt: string;
  blocknumber:number
  NFT_id: string;
  token_id: string;
  block_id: string;
  eoa_id: string;
  CA_id: string;
}

