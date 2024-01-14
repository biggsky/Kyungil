import { ItxList } from "@app/_components/transactionTable/interface";

export type IblockstxnList = ItxList;

export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
}
