
export interface IdexList {
    txHash: string;
    age: string;
    action: string;
    tokenAmountOut: string;
    tokenAmountIn: string;
    swappedRate: string;
    txnValue: string;
    dex : string
  }
  
  export interface DexListProps {
    dexList: IdexList[];
  }
  
  export interface DexListWrapProps {
    pageTxList: IdexList[] | null;
    toggleHandler: () => void;
  }
  
  export interface DexItemProps {
    DexItem: IdexList;
    toggleHandler: () => void;
  }
  
  export interface IAddInfo {
    status: string;
    transactionAction: string;
    transactionFee: string;
    gasInfo: string;
    nonce: string;
    gasLimit: string;
    position: string;
  }
  
  export interface IAdditionalInfoProps {
    addInfoTempData: IAddInfo;
    toggleHandler: () => void;
  }
  
  
  export interface IPageNationProps{
    page:number
    pageHandler:(selectedNumber:number)=>void
    maxPage:number
  }