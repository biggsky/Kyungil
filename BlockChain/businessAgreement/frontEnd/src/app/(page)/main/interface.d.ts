export interface IBlockInfoProps {
  blockHeight: string;
  blockTime: string;
}

interface IBlocksItem {
  blockHeight: string;
  blockTime: string;
  feeRecipient: string;
  transactionsInThisBlock: string;
  transactionsTime:string;
} 
interface ITransactionsItem {
  transactionHash: string;
  transactionTime: string;
  fromAddress: string;
  toAddress: string;
  ethAmount: string;
}
export interface IBlocksItemProps {
  blocksItem: IBlocksItem;
}
interface ITransactionsItemProps {
  transactionsData: ITransactionsItem;
}

export interface MainLatestResponsiveWrapProps {
  blocksData: IBlocksItem[];
  transactionsData: ITransactionsItem[];
}

export interface IBlocksListProps {
  blocksList: IBlocksItem[];
}

export interface ITransactionsListProps {
  transactionslist: ITransactionsItem[];
}

export interface IMinerProps {
  feeRecipient: string;
}

export interface ITransactionsNumberProps {
  transactionsInThisBlock: string;
  transactionsTime: string;
  blockHeight: string;
}

export interface ITransactionHashInfoProps {
  transactionHash: string;
  transactionTime: string;
}

export interface ITransactionFrom {
  fromAddress: string;
}

export interface ITransactionTo {
  toAddress: string;
}

export interface ILatestBlocksButtonProps {
  buttonName: string;
}
export interface ILatestTransactionsButtonProps {
  buttonName: string;
}

interface IOverviewTransactionsData {
  totalTransactionsCounter: number;
  transactionsPerSecond: number;
  baseFee: number;
  priorityFee: number;
}
interface IOverviewLastFinalizedBlockData {
  lastFinalizedBlock: number;
  lastSafeBlock: number;
}
export interface IOverviewProps {
  overviewTransactionsData: IOverviewTransactionsData;
  overviewLastFinalizedBlockData: IOverviewLastFinalizedBlockData;
}

export interface IOverviewTransactionsDataProps {
  overviewTransactionsData: IOverviewTransactionsData;
}

export interface IGasPriceIndicatorProps {
  baseFee: number;
  priorityFee: number;
}

export interface ITransactionsVolumeProps {
  totalTransactionsCounter: number;
  transactionsPerSecond: number;
}

interface IOverviewLastFinalizedBlockData {
  lastFinalizedBlock: number;
  lastSafeBlock: number;
}
interface IOverviewLastFinalizedBlockDataProps {
  overviewLastFinalizedBlockData: IOverviewLastFinalizedBlockData;
}

export interface IMainFinalizedBlockProps {
  lastFinalizedBlock: number;
}
