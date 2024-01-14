import { IBlockItemData } from "@app/_api/blockDetail/interface";

export interface IBlocksDataProps {
    block: string;
    age: string;
    Txn: string;
    feeRecipient: string;
    gasUsed: string;
    gasUsedPercent?:number
    gasLimit: string;
    baseFee: string;
  }

  export interface IBlocksDetail {
    blockdetail: string;
    maxHeight?:string
    pageStack?:number
  }
  
  export interface IBlocksDetailProps {
    params: { blockdetail: string };
  }
  export interface BlocksInfoProps {
    blockHeight:string;
    status: string;
    timeStamp: string;
    transaction : string
  }
  
  export interface IBlocksDifficultyProps {
    feeRecipient: string;
    totalDifficulty: string;
  }
  
  export interface IBlocksGasProps {
    gasUsed: string;
    gasUsedPercent?:string
    gasLimit: string;
    baseFeePerGas: string;
    extraData: string;
  }
  
  export interface IBlocksMoreProps {
    hash: string;
    parentHash: string;
    stateRoot: string;
    withdrawsRoot: string;
    nonce: string;
  }

  export interface IBlocksTableProps{
    blocksData:IBlocksDataProps[]
  }
  
  

  export type IBlockDetailData=IBlockItemData