import React from 'react'
import TransactionHashInfo from './TransactionHashInfo'
import TransactionFrom from './TransactionFrom'
import TransactionTo from './TransactionTo'
import { ITransactionsItemProps } from '../../interface'
import MainEthValue from '@app/_components/mainEthValue'

const MainLatestTransactionsItem:React.FC<ITransactionsItemProps> = ({transactionsData}) => {
  const {transactionHash, transactionTime, fromAddress, toAddress, ethAmount} = transactionsData;
  return (
    <li className='text-sm w-11/12 m-auto border-gray border-b-[1px] last:border-b-0 py-[15px] md:flex lg:flex dark:bg-black'>
      <TransactionHashInfo transactionHash = {transactionHash} transactionTime= {transactionTime} />
      <div className="sm:inline">
        <TransactionFrom fromAddress={fromAddress} />
        <TransactionTo toAddress ={toAddress} />
      </div>
      <MainEthValue ethValue ={ethAmount} />
    </li>
  )
}

export default MainLatestTransactionsItem