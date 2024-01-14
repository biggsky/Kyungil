import React from 'react'

interface BlockProps {
    block_Height : number;
    block_Time : number;
    fee_Recipient: string;
    transactions_In_This_Block: number;
    transactions_Time: number;
    block_Reward: number;
}

interface MainProps {
    latestBlocksData:BlockProps[];
}

const LatestBlocksMap: React.FC<MainProps> = ({latestBlocksData}) => {
    const truncateString = (str: string, num: number) => {
        if(str.length <= num){
            return str;
        }
        return str.slice(0,18) + "...";
    }
  return (
    <>
    {latestBlocksData.map((block, index)=>(
        <>
            <div className='bg-white w-11/12 h-[66.38px]'>
                <div>
                    Block

                    <span className='text-body_link_text_color ml-2'>
                        {block.block_Height}
                    </span> 

                    <span className='text-xs text-body_time_color ml-2'>
                    {block.block_Time} secs ago
                    </span>
                </div>

                <div>
                    Fee Recipient
                    <span className='text-body_link_text_color ml-2'>
                        {truncateString(block.fee_Recipient, 18)}
                    </span>
                </div>

                <div>
                    <span className="text-body_link_text_color">
                        {block.transactions_In_This_Block} txns
                    </span>
                    {/* <span className="text-black">3_1</span> */}

                    <span className='text-xs text-body_time_color ml-2'>
                        in {block.transactions_Time} secs ago 
                    </span>
                    {/* <span className="text-body_link_text_color" style={{ marginLeft: '0.5em' }}>3_2</span> */}

                    <span className='border-body_border border-2 rounded-md p-1 text-xs ml-2'>
                        {block.block_Reward} Eth
                    </span> 
                </div>
                
            </div>
            <hr className=' w-11/12 h-[15px] border-0 ' />

            {/* 마지막이 아닐때만 hr 추가해주기  */}
            {(index+1) != latestBlocksData.length && (
                <hr className="w-11/12 h-[30px] border-0 relative before:absolute before:top-1/2 before:left-0 before:w-full before:border-t before:border-gray before:h-[5px] before:-translate-y-1/2" />
            )}

        </>
    ))}
    </>
  )
}


export default LatestBlocksMap