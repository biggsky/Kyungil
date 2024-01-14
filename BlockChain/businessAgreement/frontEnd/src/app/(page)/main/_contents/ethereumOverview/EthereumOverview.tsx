import React from 'react'
import OverviewTransactions from './OverviewTransactions'
import OverviewLastFinalizedBlock from './OverviewLastFinalizedBlock'
import { IOverviewProps } from '../../interface'


const MainEthereumOverview:React.FC<IOverviewProps> = ({overviewTransactionsData, overviewLastFinalizedBlockData}) => {
  return (
    <div className='border-stone-300 sm:border-[1px] w-11/12 m-auto rounded-xl overflow-hidden my-[30px] md:flex lg:flex'>
      
      <OverviewTransactions overviewTransactionsData={overviewTransactionsData} />

      <OverviewLastFinalizedBlock overviewLastFinalizedBlockData ={overviewLastFinalizedBlockData} />

    </div>
  )
}

export default MainEthereumOverview