import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";
import {
  IListBLocksItem,
  IMainBlocksItem,
  IResponseBlockData,
} from "./interface";

const divideTimeIntoUnits = (now: number, blockTime: number) => {
  const timestampInMilliseconds = blockTime * 1000;

  const difference = now - timestampInMilliseconds;
  if (Math.floor(difference / 3600000) > 1) {
    return `${Math.floor(difference / 3600000)} hours ago`;
  } else if (Math.floor(difference / 60000) > 1) {
    return `${Math.floor(difference / 60000)} minutes ago`;
  } else {
    return `${Math.floor(difference / 1000)} seconds ago`;
  }
};

export const getBlock = async (pageName: string) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/block`,
    { next: { revalidate: 30 } },
  );
  const now = new Date().getTime();

  const responseBlockData: IResponseBlockData[] | IResponseDataSequlErr =
    await res.json();
  if (isResponseDataSequlErr(responseBlockData)) {
    return null;
  }

  if (pageName === "main") {
    const blockData: IMainBlocksItem[] = responseBlockData.map((el) => {
      return {
        blockHeight: el.number,
        blockTime: divideTimeIntoUnits(now, Number(el.timestamp)),
        feeRecipient: el.miner,
        transactionsInThisBlock: "없음",
        transactionsTime: "없음 ago",
      };
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return blockData.slice(0, 5);
  } else if (pageName === "list") {
    const blockData: IListBLocksItem[] = responseBlockData.map((el) => {
      return {
        block: el.number,
        age: divideTimeIntoUnits(now, Number(el.timestamp)),
        feeRecipient: el.miner,
        baseFee: el.baseFeePerGas,
        gasLimit: el.gasLimit,
        gasUsed: el.gasUsed,
        Txn: "104",
      };
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return blockData.slice(0, 5);
  }
};
