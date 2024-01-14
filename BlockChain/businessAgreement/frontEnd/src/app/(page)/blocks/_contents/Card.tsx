import React from "react";

export const BlockCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" py-1 px-2 m-auto  bg-white rounded-lg  shadow-md min-w-[280px]  max-w-[1250px] w-11/12 mt-5  dark:bg-black ">
          {children}
        </div>
      )
};
