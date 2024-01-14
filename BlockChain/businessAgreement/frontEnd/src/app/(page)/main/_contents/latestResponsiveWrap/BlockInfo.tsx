import React from 'react'
import { IBlockInfoProps } from '../../interface'

import Link from 'next/link';

const MainBlockInfo:React.FC<IBlockInfoProps>
= ({blockHeight, blockTime}) => {

  return (
    <p className='md:w-[36%] lg:w-[36%] dark:text-white'>
        Block
        <Link className='ml-2 text-text-mainTextColor' href={`/blocks/${blockHeight}`}>{blockHeight}</Link>

        <span className='sm:ml-2 md:ml-0 lg:ml-0 text-xs text-zinc-400 md:block lg:block'>{blockTime} </span>
    </p>
  )
}

export default MainBlockInfo