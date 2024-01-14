import React from "react";
import { IMainFinalizedBlockProps } from "../../interface";

const MainFinalizedBlock:React.FC<IMainFinalizedBlockProps> = ({lastFinalizedBlock}) => {
  return (
    <div className='whitespace-nowrap sm:text-[11px] md:text-[12px] lg:text-[15px]'>
      <p className='text-zinc-400 font-titleFont'>LAST FINALIZED BLOCK</p>
      <p className="md:text-[15px] lg:text-[20px] dark:text-white">{lastFinalizedBlock}</p>
    </div>
  );
};

export default MainFinalizedBlock;
