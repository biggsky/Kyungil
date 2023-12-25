import React from 'react'

interface List{
  total_transactions_counter : string,
  transactions_per_second : number,
  base_Fee : string,
  priority_Fee : number,
}

interface MainProps{
  transactionsData:List;
}

const Transactions:React.FC<MainProps> = ({transactionsData}) => {
  const {
    total_transactions_counter,
    transactions_per_second,
    base_Fee,
    priority_Fee
  } = transactionsData;

  return (
    <>
      <div className='w-full flex'>
        {/* 1 */}
        <div className='mr-2'>
          <span className=' text-xl'>🟡</span>
        </div>

        {/* 2 */}
        <div className='w-1/2'>
          <div className='text-body_time_color text-xs'>TRANSACTIONS</div>
          {/* <Link>2,148.89 M</Link> */}
          <a className='text-xs whitespace-nowrap' href=''>
            {total_transactions_counter} M
            <span className='text-body_time_color ml-2'>
              ({transactions_per_second} TPS)
            </span>
          </a>
        </div>

        {/* 3 */}
        <div className=' w-1/3'>
          <div className='text-body_time_color text-xs whitespace-nowrap'>MED GAS PRICE</div>
          {/* link로 바꿀것 */}
          <a className='text-xs whitespace-nowrap' href=''>
            {base_Fee} <span className='text-body_time_color'> (${priority_Fee})</span>
          </a>
        </div>

      </div>
    </>
  )
}

export default Transactions