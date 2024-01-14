import React from "react";
import Title from "../itemTitle";

const ItemTableWrap = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className=" dark:bg-datkMode-wrapBG py-1 px-2 m-auto bg-white rounded-lg shadow-md min-w-[280px] max-w-[1250px] w-11/12">
      {children}
    </div>
  );
};

export default ItemTableWrap;
