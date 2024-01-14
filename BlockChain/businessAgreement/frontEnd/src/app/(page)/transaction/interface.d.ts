import {
  IEventLogData,
  ITransactionItemData,
} from "@app/_api/txDetail/interface";
import { ItxList } from "@app/_components/transactionTable/interface";

export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
  transactionItemData: ITransactionDetailData;
}

export interface ITransactionListWrapProps {
  transactionList: ItxList[];
}

export type ITransactionDetailData = ITransactionItemData;
export interface ITransactionDetailProps {
  transactionItemData: ITransactionDetailData;
}

export interface ITxDetailLogDataProps {
  eventLogDataList: IEventLogData[];
}
