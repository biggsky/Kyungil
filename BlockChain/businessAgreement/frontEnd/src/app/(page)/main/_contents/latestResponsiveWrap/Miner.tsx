import React from 'react'
import { IMinerProps } from '../../interface'
import Link from 'next/link'

const MainMiner:React.FC<IMinerProps> = ({feeRecipient}) => {
  const truncate = (transaction: string) => {
    return transaction.slice(0, 8) + "..." + transaction.slice(-8);
  };
  // const truncateTransaction = truncate();

  return (
    <p className='dark:text-white'>
        Fee Recipient
        <Link href={`/address/${feeRecipient}`} className='ml-2 text-text-mainTextColor'>{truncate(feeRecipient)}</Link>
    </p>
  )
}

export default MainMiner