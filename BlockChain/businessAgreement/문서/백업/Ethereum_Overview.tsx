import React from "react";
import Transactions from "./Transactions";
import Last_Finalized_Block from "./Last_Finalized_Block";

interface List1 {
  total_transactions_counter: string;
  transactions_per_second: number;
  base_Fee: string;
  priority_Fee: number;
}

interface List2 {
  last_finalized_block: number;
  last_safe_block: number;
}

interface MainProps {
  transactionsData: List1;
  last_finalized_block_Data: List2;
}

const Ethereum_Overview: React.FC<MainProps> = ({
  transactionsData,
  last_finalized_block_Data,
}) => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-white w-11/12 rounded-lg '>
          <hr className=' w-full h-[15px] border-0 ' />

          <div className='flex justify-center'>
            <div className='w-11/12'>
              <Transactions transactionsData={transactionsData} />
            </div>
          </div>

          <div className='flex justify-center'>
            <hr className='w-11/12 h-[30px] border-0 relative before:absolute before:top-1/2 before:left-0 before:w-full before:border-t before:border-gray before:h-[5px] before:-translate-y-1/2' />
          </div>

          <div className='flex justify-center'>
            <div className='w-11/12'>
              <Last_Finalized_Block
                last_finalized_block_Data={last_finalized_block_Data}
              />
            </div>
          </div>

          <hr className=' w-full h-[15px] border-0 ' />
        </div>
      </div>
    </>
  );
};

export default Ethereum_Overview;
