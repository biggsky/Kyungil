import React from "react";

const TxTabWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-20 items-center sm:justify-center md:justify-center  lg:justify-center ">
      {children}
    </div>
  );
};

export default TxTabWrap;
