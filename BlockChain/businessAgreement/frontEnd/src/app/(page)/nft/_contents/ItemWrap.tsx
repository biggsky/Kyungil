"use client";
import React, { use, useEffect } from "react";
import { INFTItemProps, INFTItem } from "../interface";
import CollectionItem from "./Item";
import CollectionTableTitle from "./TableTitle";
import usePagination from "@app/_hooks/usePagination";
import Pagination from "@app/_components/pagination";

const CollectionItemWrap: React.FC<INFTItemProps> = ({ NFTListdata }) => {
  return (
    <div className="overflow-x-scroll">
      <CollectionTableTitle />
      {NFTListdata &&
        (NFTListdata as INFTItem[]).map(
          (
            {
              createdAt,
              creatorAddress,
              description,
              id,
              imgUrl,
              name,
              owner,
              tokenId,
            },
            index
          ) => (
            <CollectionItem
              createdAt={createdAt}
              creatorAddress={creatorAddress}
              description={description}
              id={id}
              imgUrl={imgUrl}
              name={name}
              owner={owner}
              tokenId={tokenId}
              key={index}
            />
          )
        )}
    </div>
  );
};

export default CollectionItemWrap;
