import React from "react";
import Title from "@app/_components/itemTitle";
import { getBlock } from "@app/_api/main/getBlock";
import BlocksTable from "./_contents/Table";
import { IBlocksDataProps } from "./interface";
import Error from "@app/_components/error";

const Page = async () => {
  const blocksData = await getBlock("list");
  if(!blocksData){
    return <Error/>
  }
  return (
    <div className="box-border flex flex-col items-center ">
      <div className="w-full ">
        <Title title="Blocks" />
        <div className="my-10">
          <BlocksTable blocksData={blocksData as IBlocksDataProps[]} />
        </div>
      </div>
    </div>
  );
};

export default Page;
