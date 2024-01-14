import React from "react";
import { ethValueProps } from "./interface";

const MainEthValue: React.FC<ethValueProps> = ({ ethValue }) => {
  return (
    <>
      <span className="md:ml-auto lg:ml-auto border-stone-300 border-[1px] px-2 py-[5px] rounded-md m-2 text-[10px] dark:border-gray dark:text-white text-center">
        {ethValue} Eth
      </span>
    </>
  );
};

export default MainEthValue;
