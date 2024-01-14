'use client'
import React, { useState } from "react";
import NftDetailsTitle from "./DetailsTitle";
import NftDetailsList from "./DetailsList";
import { INftDetailsProps } from "../../interface";

const NftItemDetails:React.FC<INftDetailsProps> = ({nftData}) => {
  const [listVisible, setListVisible] = useState(true);
  return (
    <div className='w-full'>
      <NftDetailsTitle stateProps={listVisible} stateSetProps={setListVisible} />
      <NftDetailsList nftData={nftData} stateProps={listVisible} />
    </div>
  );
};

export default NftItemDetails;
