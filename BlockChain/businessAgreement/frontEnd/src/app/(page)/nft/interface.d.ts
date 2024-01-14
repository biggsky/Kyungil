import { INFTListData, IResponseNFTListData } from "@app/_api/nft/interface";


export type INFTItem =INFTListData

export interface INFTItemProps {
  NFTListdata: INFTItem[];
}
export interface INftTxDetailProps {
  params: { nftId: string };
}

export interface INftTxDetailInventory {
  tokenId: string;
  owner: string;
}

export interface INftTxDetailInventoryProps {
  nftInvenData: INftTxDetailInventory;
}

export type INFTDetailData=IResponseNFTListData