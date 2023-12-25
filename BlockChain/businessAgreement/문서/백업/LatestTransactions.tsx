import React from 'react'

interface LatestTransactionsList {
    transaction_Hash : string;
    transaction_Time : number;
    from_Address : string;
    to_Address : string;
    eth_Amount : number;
}

interface MainProps{
    latestTransactionsData : LatestTransactionsList[];
}

const LatestTransactions: React.FC<MainProps> = ({ latestTransactionsData }) => {
  const truncateString = (str: string, num: number) => {
    if(str.length <= num){
        return str;
    }
    return str.slice(0,15) + "...";
  }
  const truncateString2 = (str: string) => {
    return str.slice(0,8) + "..." + str.slice(-8);
  }

  return (
    <>
        <div className='h-[630px] flex justify-center'>
            <div className='bg-gray w-11/12 h-32 rounded-lg'>

                {/* header */}
                <div className='bg-white w-full h-14 border-b-2 border-b-gray rounded-t-lg flex flex-wrap items-center '>
                    <span className='ml-4 font-bold'>Latest Transactions</span>
                </div>

                {/* body */}
                <div className='bg-white w-full h-[484.8px] flex flex-wrap justify-center content-start overflow-auto'>
                    <hr className='w-11/12 h-[15px] border-0 ' />
                    
                    {/* <LatestTransactionsMap latestTransactionsData = {latestTransactionsData} /> */}
                    {latestTransactionsData.map((block, index)=>(
                        <>
                            <div className='bg-white w-11/12 h-[66.38px]'>
                                <div>
                                    <span className="text-black">TX#</span>

                                    <span className='text-body_link_text_color ml-2'>
                                        {truncateString(block.transaction_Hash, 18)}
                                    </span> 

                                    <span className='text-xs text-body_time_color ml-2'>
                                    {block.transaction_Time} secs ago
                                    </span>
                                </div>

                                <div>
                                    <span className="text-black">From</span>
                                    
                                    <span className='text-body_link_text_color ml-2'>
                                        {truncateString2(block.from_Address)}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-black">To</span>
                                    
                                    <span className="text-body_link_text_color ml-2">
                                        {truncateString2(block.to_Address)} 
                                    </span>

                                    <span className='border-body_border border-2 rounded-md p-1 text-xs ml-2'>
                                        {block.eth_Amount} Eth
                                    </span> 
                                </div>
                                
                            </div>
                            <hr className=' w-11/12 h-[15px] border-0 ' />

                            {/* 마지막이 아닐때만 hr 추가해주기  */}
                            {(index+1) != latestTransactionsData.length && (
                                <hr className="w-11/12 h-[30px] border-0 relative before:absolute before:top-1/2 before:left-0 before:w-full before:border-t before:border-gray before:h-[5px] before:-translate-y-1/2" />
                            )}

                        </>
                    ))}


                    <hr className='w-11/12 h-[15px] border-0 ' />
                </div>

                {/* footer */}
                <div className='bg-footer w-full h-[51px] flex flex-wrap items-center justify-center rounded-b-lg text-footer_text font-bold'>
                    VIEW ALL TRANSACTIONS →{" "}
                </div>

            </div>
        </div>
    </>
  )
}

export default LatestTransactions