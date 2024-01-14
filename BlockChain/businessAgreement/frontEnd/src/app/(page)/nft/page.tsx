import SearchBar from "@app/_components/searchBar";
import React, { useEffect } from "react";
import Title from "@app/_components/itemTitle";
import ItemTableWrap from "@app/_components/itemTable";
import CollectionTableTitle from "./_contents/TableTitle";
import { INFTItem } from "./interface";
import CollectionItemWrap from "./_contents/ItemWrap";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";
import useHydration from "@app/_hooks/useHydration";
import NFTTable from "./_contents/Table";
import { getNFT } from "@app/_api/nft/getNFT";
import Error from "@app/_components/error";

const Page = async () => {
  const NFTListdata: INFTItem[] = (await getNFT()) as INFTItem[];
  if (!NFTListdata) {
    return <Error />;
  }
  return (
    <div className="bg-mainBackGroundColor min-h-screen dark:bg-black/90">
      {/* <SearchBar />
      <NFTContainer /> */}
      <Title title="NFT List" />
      <NFTTable NFTListdata={NFTListdata} />
    </div>
  );
};

export default Page;
