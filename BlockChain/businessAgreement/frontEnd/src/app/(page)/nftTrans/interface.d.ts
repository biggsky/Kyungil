import { IAddressNFTTxList } from "../address/interface";

export interface INftTransList {
  hash: string;
  method: string;
  age : string
  from: string;
  to: string;
  type: string;
  itemImage? : string
  itemName : string;
}


export interface INftTxListProps {
  nftTxList: IAddressNFTTxList[];
  maxHeight?:string
  pageStack?:number
}

export interface INftTxListWrapProps {
  pageTxList: INftTransList[] | null;
  toggleHandler: () => void;
}

export interface INftTxItemProps {
  NftTxItem: INftTransList;
  toggleHandler: () => void;
}

export interface INftAddInfo {
  status: string;
  transactionAction: string;
  transactionFee: string;
  gasInfo: string;
  nonce: string;
  position?: string;
}

export interface IAdditionalInfoProps {
  addInfoTempData: IAddInfo;
  toggleHandler: () => void;
}

export interface IPageNationProps {
  page: number;
  pageHandler: (selectedNumber: number) => void;
  maxPage: number;
}


export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
}



export interface INFTTranseTableProps{
  NFTTransData:INftTransList[]
}