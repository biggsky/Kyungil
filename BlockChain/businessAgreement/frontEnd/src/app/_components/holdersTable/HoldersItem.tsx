import React from "react";
import { HoldersItemProps } from "./interface";

const HoldersItem: React.FC<HoldersItemProps> = ({ HoldersItem ,index}) => {
  return (
    <tr className='h-14 border-b border-gray text-sm flex items-center'>
      <td className='w-[100px] pl-[20px]'>
        {index}
      </td>
      <td className='min-w-[350px]'>
        {HoldersItem}
      </td>
    </tr>
  );
};

export default HoldersItem;
