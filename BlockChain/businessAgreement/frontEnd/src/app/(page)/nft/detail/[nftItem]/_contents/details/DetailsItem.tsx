import React from 'react'
import { INftDetailsItemProps } from '../../interface'


const NftDetailsItem:React.FC<INftDetailsItemProps> = ({name,address}) => {
  return (
    <li className='flex py-5'>
      <span className='text-stone-500 text-sm sm:w-[150px] md:w-1/3 lg:w-[350px]'>{name}:</span>
      <span className= 'md:w-2/3 text-sm lg:w-2/3 dark:text-white'>{address}</span>
    </li>
  )
}

export default NftDetailsItem