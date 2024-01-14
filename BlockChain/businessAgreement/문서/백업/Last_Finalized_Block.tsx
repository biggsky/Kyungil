import React from 'react'

interface List {
    last_finalized_block : number,
    last_safe_block : number
}

interface MainProps{
    last_finalized_block_Data:List
}

const Last_Finalized_Block:React.FC<MainProps> = ({last_finalized_block_Data}) => {
  const {
    last_finalized_block,
    last_safe_block
  } = last_finalized_block_Data;
  return (
    <>
      <div className=' w-full flex'>
        {/* 1 */}
        <div className='mr-2'>
          <span className=' text-xl'>🟡</span>
        </div>

        {/* 2 */}
        <div className='w-1/2'>
          <div className='text-body_time_color text-xs'>LAST FINALIZED BLOCK</div>
          {/* <Link>2,148.89 M</Link> */}
          <a className='text-xs whitespace-nowrap' href=''>
            <span className='text-black'>
              {last_finalized_block}
            </span>
          </a>
        </div>

        {/* 3 */}
        <div className=' w-1/3'>
          <div className='text-body_time_color text-xs whitespace-nowrap'>LAST SAFE BLOCK</div>
          {/* link로 바꿀것 */}
          <a className='text-xs whitespace-nowrap' href=''>
            <span className='text-black'> {last_safe_block}
            </span>
          </a>
        </div>

      </div>
    </>
  )
}

export default Last_Finalized_Block