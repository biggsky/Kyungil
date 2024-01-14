import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";

import { IAddressContent } from "@app/(page)/address/interface";
import { IResponseTransactionData } from "../main/interface";
import { IResponseNFTListData } from "../nft/interface";

export type IAddressItem = IAddressContent;

export interface IAddressData {
  ethBalance: string;
  lastTxnSent: string;
  firstTxnSent: string;
  number: string;
  timestamp: string;
  transactionsRoot: string;
  updatedAt: string;
  address: string;
  firstTxnSentTimestamp:string;
  lastTxnSentTimestamp:string
  txs:IAddressDataTxs[]

}

export interface IAddressDataTxs extends IResponseTransactionData{
  NFTName:string
  tokenName:string
}
export interface IAddressTxData {
  ethBalance: string;
  lastTxnSent: string;
  firstTxnSent: string;
  number: string;
  timestamp: string;
  transactionsRoot: string;
  updatedAt: string;
  address: string;
  firstTxnSentTimestamp:string;
  lastTxnSentTimestamp:string
  txs:IResponseTransactionData[]
  method: string;
  block: string;
  from: string;
  to: string;
  value: string;
  age : string

}

