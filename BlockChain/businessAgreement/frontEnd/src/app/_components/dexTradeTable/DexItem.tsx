import React from 'react'
import { DexItemProps } from './interface';

const DexItem: React.FC<DexItemProps> = ({ DexItem, toggleHandler }) => {
    return (
        <tr className="h-14 border-b border-gray text-sm flex items-center">
          <td className="min-w-[60px] flex justify-center">
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/ce/9c/4e/ce9c4e4f06e724a10b3766845f93a051.png"
                alt="detail"
                className="w-5 h-5 cursor-pointer"
                onClick={toggleHandler}
              />
            </div>
          </td>
          <td className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
            {DexItem.txHash}
          </td>
          <td className="min-w-[200px] items-center">
            {DexItem.age}
          </td>
          <td className="min-w-[100px] items-center">
            {DexItem.action}
          </td>
          <td className="min-w-[200px] items-center">
            {DexItem.tokenAmountOut}
          </td>
          <td className="min-w-[200px]" style={{ lineHeight: "2.3rem" }}>
            {DexItem.tokenAmountIn}
          </td>
          <td className="min-w-[200px] " style={{ lineHeight: "2.3rem" }}>
            {DexItem.swappedRate}
          </td>
          <td className="min-w-[150px] items-center">
            {DexItem.txnValue}
          </td>
        </tr> 
      );
}

export default DexItem