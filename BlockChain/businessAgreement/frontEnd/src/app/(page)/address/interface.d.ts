import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "../nftTrans/interface";
import { ITransactionDetailData } from "../transaction/interface";
import {
  IAddressData,
  IAddressTxData,
  IAddressMoreDataTxList,
} from "@app/_api/address/interface";
import { IResponseTransactionData } from "@app/_api/main/interface";

interface IAddressTitle {
  title: string;
}

interface IAddressContent {
  ethBalance: string;
  lastTxnSentTimestamp: string;
  firstTxnSentTimestamp: string;
  txs: IAddressTransactionDataList;
  // firstTx:string
  // lastTx:string
}
export interface IAddressMoreInfoTx extends ItxList {
  NFTId: string;
  tokenId: string;
  NFTName:string
  tokenName:string
}

export interface ITxListProps {
  txList: IAddressMoreInfoTx[];
  lastName: string;
  pageStack?: number;
}

export interface IAddressTxHash {
  hash: string;
}

export interface IAddressTableProps {
  addressData: IAddressContent[];
}

export type IAddresstxList = IAddressTxData;

export type INFTTxList = INftTransList;

export type IAddressDetailData = IAddressData;

export type IAddressTxList = IAddressMoreDataTx;

export type IAddressTransactionDataList = IResponseTransactionData[];


export type IAddressNFTTxList=INftTransList

export type IAddressTokenTxList=ItxList