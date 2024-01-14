import React from "react";
import NftETHIndicator from "./ETHIndicator";

const NftItemPrice = () => {
  return (
    <ul className='border-gray border-[1px] rounded-xl my-[20px] lg:flex lg:text-center'>
      <NftETHIndicator
        title='Min Price (24H)'
        ethValue={33.2}
      />
      <NftETHIndicator
        title='Last Sale (Item)'
        ethValue={33.49}
      />
      <NftETHIndicator
        title='Last Sale (Contract)'
        ethValue={33.2}
      />
    </ul>
  );
};

export default NftItemPrice;
