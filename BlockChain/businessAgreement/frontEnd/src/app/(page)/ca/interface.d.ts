import { IResponseCAData } from "@app/_api/ca/interface";
import { IResponseTransactionData } from "@app/_api/main/interface";
import { ItxList } from "@app/_components/transactionTable/interface";

export type ICaDetailData = IResponseCAData;

export interface ICaDetailOverViewProps {
  title: string;
  caType: string;
}

export interface ICaMarketCardProps {
  title: string;
  abiSigniture: Array<string>;
}

export interface ICaOtherInfoCardProps {
  title: string;
  signitureNames: Array<string>;
}

export type ICaTxList = ItxList;

export interface ICaTxListProps {
  caTxList: IResponseTransactionData[];
}
