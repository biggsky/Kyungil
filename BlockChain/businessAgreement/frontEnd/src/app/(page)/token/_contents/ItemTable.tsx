import React from "react";

const ItemTableWrap = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="my-10 py-1 px-2 m-auto bg-white rounded-lg shadow-md min-w-[280px] max-w-[1250px] w-11/12 dark:bg-black">
      {children}
    </div>
  );
};

export default ItemTableWrap;
