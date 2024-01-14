import React from "react";
import { IGasPriceIndicatorProps } from "../../interface";

const MainGasPriceIndicator: React.FC<IGasPriceIndicatorProps> = ({
  baseFee,
  priorityFee,
}) => {
  return (
    <div className='whitespace-nowrap ml-auto sm:text-[11px] md:text-[12px] lg:text-[15px]'>
      <p className='text-zinc-400'>MED GAS PRICE</p>
      <p>
        <span className="md:text-[15px] lg:text-[20px]">{baseFee} Gwei</span>
        <span className='text-zinc-400'> (${priorityFee})</span>
      </p>
    </div>
  );
};

export default MainGasPriceIndicator;
