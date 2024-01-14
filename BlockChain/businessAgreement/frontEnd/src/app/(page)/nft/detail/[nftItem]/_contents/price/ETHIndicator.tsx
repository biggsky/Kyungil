import React from "react";
import { INftETHIndicatorProps } from "../../interface";

const NftETHIndicator: React.FC<INftETHIndicatorProps> = ({
  title,
  ethValue,
}) => {
  return (
    <li className='w-11/12 m-auto border-gray sm:border-b-[1px] md:border-b-[1px] lg:border-r-[1px] sm:py-5 md:py-5 lg:my-5 last:border-b-0 last:border-r-0 '>
      <p className='text-zinc-400 text-sm'>{title}</p>
      <p>
        {ethValue} ETH 
      </p>
    </li>
  );
};

export default NftETHIndicator;
