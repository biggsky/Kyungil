import React from "react";

interface DropDownItemProps {
    title: string;
    maxTotalSupply:string
  
  }
  export const DropDownItem: React.FC<DropDownItemProps> = ({ title, maxTotalSupply}: DropDownItemProps) => {
    return (
        <div className="p-1 m-1 border-b border-gray hover:bg-gray hover:rounded dark:bg-black ">
           <div className="text-sm">{title}</div>
           <div className="text-xs">{maxTotalSupply}</div>
         
        </div>
      )
};