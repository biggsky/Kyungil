import React from "react";
import MainSearchBarWrap from "./(page)/main/_contents/searchBarWrap/SearchBarWrap";
import EthereumOverview from "./(page)/main/_contents/ethereumOverview/EthereumOverview";
import LatestResponsiveWrap from "./(page)/main/_contents/latestResponsiveWrap/LatestResponsiveWrap";
import Header from "./_layout/header";
import Footer from "./_layout/footer";
import { getBlock } from "./_api/main/getBlock";
import { getTransaction } from "./_api/main/getTransaction";
import { IMainBlocksItem, IMainTransactionData } from "./_api/main/interface";
import Loading from "./_components/loading";
import Error from "@app/_components/error";


export default async function Main() {
  const blockData = await getBlock("main");
  const transactionData = await getTransaction("main");
  const overviewTransactionsData = {
    totalTransactionsCounter: 2155.7,
    transactionsPerSecond: 12.7,
    baseFee: 42,
    priorityFee: 1.81,
  };
  const overviewLastFinalizedBlockData = {
    lastFinalizedBlock: 18562780,
    lastSafeBlock: 18562812,
  };
  if(!blockData){
    return  <Error/>
  }
  // const blocksData = [
  //   {
  //     blockHeight: 1,
  //     blockTime: 3,
  //     feeRecipient: "rsync-builder",
  //     transactionsInThisBlock: 147,
  //     transactionsTime: 12,
  //     blockReward: 0.04742,
  //   },
  //   {
  //     blockHeight: 2,
  //     blockTime: 6,
  //     feeRecipient: "lucid",
  //     transactionsInThisBlock: 284,
  //     transactionsTime: 24,
  //     blockReward: 0.642,
  //   },
  //   {
  //     blockHeight: 3,
  //     blockTime: 9,
  //     feeRecipient: "demian",
  //     transactionsInThisBlock: 321,
  //     transactionsTime: 36,
  //     blockReward: 0.856,
  //   },
  //   {
  //     blockHeight: 4,
  //     blockTime: 3,
  //     feeRecipient: "rsync-builder",
  //     transactionsInThisBlock: 147,
  //     transactionsTime: 12,
  //     blockReward: 0.04742,
  //   },
  //   {
  //     blockHeight: 5,
  //     blockTime: 6,
  //     feeRecipient: "lucid",
  //     transactionsInThisBlock: 284,
  //     transactionsTime: 24,
  //     blockReward: 0.642,
  //   },
  //   {
  //     blockHeight: 6,
  //     blockTime: 9,
  //     feeRecipient: "demian",
  //     transactionsInThisBlock: 321,
  //     transactionsTime: 36,
  //     blockReward: 0.856,
  //   },
  // ];
  // const transactionsData = [
  //   {
  //     transactionHash:
  //       "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
  //     transactionTime: 13,
  //     fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
  //     toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
  //     ethAmount: 0.03384,
  //   },
  //   {
  //     transactionHash:
  //       "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
  //     transactionTime: 26,
  //     fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
  //     toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
  //     ethAmount: 0.4321,
  //   },
  //   {
  //     transactionHash:
  //       "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
  //     transactionTime: 13,
  //     fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
  //     toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
  //     ethAmount: 0.03384,
  //   },
  //   {
  //     transactionHash:
  //       "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
  //     transactionTime: 26,
  //     fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
  //     toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
  //     ethAmount: 0.4321,
  //   },
  //   {
  //     transactionHash:
  //       "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
  //     transactionTime: 13,
  //     fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
  //     toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
  //     ethAmount: 0.03384,
  //   },
  //   {
  //     transactionHash:
  //       "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
  //     transactionTime: 26,
  //     fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
  //     toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
  //     ethAmount: 0.4321,
  //   },
  // ];
  return (
    <>
      <Header />
      <div className="max-w-[1400px] m-auto sm:px-0 md:px-0 pt-0 p-8 dark:bg-black">
        <MainSearchBarWrap />
        <EthereumOverview
          overviewTransactionsData={overviewTransactionsData}
          overviewLastFinalizedBlockData={overviewLastFinalizedBlockData}
        />
        <LatestResponsiveWrap
          blocksData={blockData as IMainBlocksItem[]}
          transactionsData={transactionData as IMainTransactionData[]}
        />
      </div>
      <Footer />
    </>
  );
}
