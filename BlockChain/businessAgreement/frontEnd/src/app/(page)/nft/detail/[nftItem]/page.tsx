import React from "react";
import NftItemTitle from "./_contents/title/ItemTitle";
import NftItemImage from "./_contents/image/ItemImage";
import NftItemPrice from "./_contents/price/ItemPrice";
import NftActivity from "./_contents/activity";
import NftDetails from "./_contents/details";
import { getNfts } from "@app/_api/nftDetail/getNfts";
import { INftDetails } from "./interface";
import { INftActivityData } from "./interface";
import Error from "@app/_components/error";

interface INftItemProps {
  params: {
    [key: string]: string;
  };
}

const Page = async (props: INftItemProps) => {
  let param = props.params.nftItem;
  const nftData: INftDetails = await getNfts(param);
  if(!nftData){
    return <Error/>;
  }
  
  let activityData:INftActivityData[] = [];
  activityData = nftData.txs;
  // console.log("txs:",nftData);
  if(Object.keys(activityData).length == 0){
    console.log("activityData1: ",activityData);
    // 데이터 없으면
    // activityData = [{
    //   hash:
    //         "",
    //   Timestamp: "",
    //   Method: "",
    //   from: "",
    //   to: "",
    // }];

    // 데이터 한번 넣어보기
    activityData = [{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash: "0x6f6e5ff4ee3196d2f9babfc7ce2ef4f5df5fc2ba2ac8f5d2d5550a87c2859fb9",
      Timestamp: "49 mins ago",
      Method: "Transfer",
      from: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
      to: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    },{
      hash:
            "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      Timestamp: "49 mins ago",
      Method: "Mint",
      from: "0x0000000000000000000000000000000000000000",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    }];
    // console.log("txs:",activityData);
  }else{
    // 데이터가 있으면. (현재는 데이터가 없는데 아마 데이터 들어오면 간단히 수정가능)
    console.log("activityData2:",activityData);
  }
  return (
    <>
      <div className='sm:p-4 md:p-8 lg:px-8 lg:my-10 m-auto'>
        <div className='flex sm:flex-col md:gap-10 lg:gap-10 '>
          <div className='md:hidden lg:hidden'>
            <NftItemTitle nftData={nftData} />
          </div>
          <div>
            <NftItemImage nftData = {nftData.imageUrl} />
          </div>
          <div className='md:w-full'>
            <div className='sm:hidden'>
              <NftItemTitle nftData={nftData} />
            </div>
            {/* <NftItemPrice /> */}
            <NftDetails nftData={nftData} />
          </div>
        </div>
        <NftActivity activityData={activityData}  />
        
      </div>
    </>
  );
};

export default Page;
