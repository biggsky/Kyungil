import React from "react";
import LatestBlocksMap from "./LatestBlocksMap";


interface LatestBlocksList {
  block_Height: number;
  block_Time: number;
  fee_Recipient: string;
  transactions_In_This_Block: number;
  transactions_Time: number;
  block_Reward: number;
}

interface MainProps {
  latestBlocksData: LatestBlocksList[];
}

const LatestBlocks: React.FC<MainProps> = ({ latestBlocksData }) => {
    const truncateString = (str: string, num: number) => {
        if(str.length <= num){
            return str;
        }
        return str.slice(0,18) + "...";
    }
  return (
    <>
        <div className=' flex justify-center'>
            <div className='bg-gray w-11/12  rounded-lg'>

                {/* header */}
                <div className='bg-white w-full h-14 border-b-2 border-b-gray rounded-t-lg flex flex-wrap items-center '>
                    <span className='ml-4 font-bold'>Latest Blocks</span>
                </div>

                {/* body */}
                <div className='bg-white w-full h-[484.8px] flex flex-wrap justify-center content-start overflow-auto'>
                    <hr className='w-11/12 h-[15px] border-0 ' />
                    
                    <LatestBlocksMap latestBlocksData = {latestBlocksData} />

                    <hr className='w-11/12 h-[15px] border-0 ' />
                </div>

                {/* footer */}
                <div className='bg-footer w-full h-[51px] flex flex-wrap items-center justify-center rounded-b-lg text-footer_text font-bold'>
                    VIEW ALL BLOCKS →{" "}
                </div>

            </div>
        </div>
    </>
  );
};

export default LatestBlocks;
