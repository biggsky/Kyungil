import React from "react";

interface IMainSafeBlockProps {
  lastSafeBlock: number;
}

const MainSafeBlock: React.FC<IMainSafeBlockProps> = ({ lastSafeBlock }) => {
  return (
    <div className='whitespace-nowrap ml-auto sm:text-[11px] md:text-[12px] lg:text-[15px]'>
      <p className='text-zinc-400 '>LAST SAFE BLOCK</p>
      <p className="md:text-[15px] lg:text-[20px]">{lastSafeBlock}</p>
    </div>
  );
};

export default MainSafeBlock;
