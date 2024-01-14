'use client'
import usePagination from "@app/_hooks/usePagination";
import React from "react";
import { INFTItemProps, INFTItem } from "../interface";
import ItemTableWrap from "@app/_components/itemTable";
import CollectionItemWrap from "./ItemWrap";
import Pagination from "@app/_components/pagination";

const NFTTable: React.FC<INFTItemProps> = ({ NFTListdata }) => {
  const { maxPage, page, pageHandler, pageTxList } =
    usePagination<INFTItem>(NFTListdata);
  return (
    <div className="my-10">
      <ItemTableWrap>
        <CollectionItemWrap NFTListdata={NFTListdata} />
        <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
      </ItemTableWrap>
    </div>
  );
};

export default NFTTable;
