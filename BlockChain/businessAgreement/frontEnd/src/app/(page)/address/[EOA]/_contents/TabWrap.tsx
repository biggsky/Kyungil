import React from "react";

const AddressTabWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-[95%] overflow-x-scroll m-auto  ">
      <div className="flex w-[500px]  h-20 items-center justify-center">{children}</div>
    </div>
  );
};

export default AddressTabWrap;
