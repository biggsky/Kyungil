import { ItxList } from "@app/_components/transactionTable/interface";
import { IResponseTransactionData } from "../main/interface";

export interface IResponseCAData {
  id: number;
  address: string;
  CAtype: string;
  abiSigniture: Array<string>;
  signitureNames: Array<string>;
  abi: string | null;
  createdAt: string;
  updatedAt: string;
  txs: IResponseTransactionData[];
}
