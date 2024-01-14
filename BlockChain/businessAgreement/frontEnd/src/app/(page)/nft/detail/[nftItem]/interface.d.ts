export interface INftETHIndicatorProps {
  title: string;
  ethValue: number;
}

// details
export interface INftDetailsTitleProps {
  stateProps: boolean;
  stateSetProps: (newState: boolean) => void;
}
export interface INftDetailsListProps {
  stateProps: boolean;
}
export interface INftDetailsItemProps {
  name: string;
  address: string;
}

// activity
interface INftALTotalRecordProps {
  totalCount: number;
}
interface INftDetails{
  id : number,
  tokenId : string,
  name : string,
  description : string,
  imageUrl : string,
  creatorAddress : string,
  address : string,
  Owner : string,
  txs : object | Array,
}
interface INftDetailsProps{
nftData : INftDetails;
}
interface INftActivityData {
  hash: string;
  Timestamp: string;
  Method: string;
  from: string;
  to: string;
}
interface INftActivityProps{
  activityData : INftActivityData[];
}
interface INftAListOA {
  pageTxList:INftActivityData[],
  // toggleHandler: () => void;
}
interface INftPageTxnListProps{
  pageTxList:INftActivityData[],
  toggleHandler: () => void;
}