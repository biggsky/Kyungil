import React from 'react'
import MainBlockIndicator from './BlockIndicator'
import MainFinalizedBlock from './FinalizedBlock'
import { IOverviewLastFinalizedBlockDataProps } from '../../interface'

const MainOverviewLastFinalizedBlock:React.FC<IOverviewLastFinalizedBlockDataProps> = ({overviewLastFinalizedBlockData}) => {
  const {lastFinalizedBlock} = overviewLastFinalizedBlockData;
  return (
    <div className='flex sm:w-11/12 m-auto sm:p-5 sm:pl-0'>
      <MainBlockIndicator />
      <MainFinalizedBlock lastFinalizedBlock={lastFinalizedBlock} />
    </div>
  )
}

export default MainOverviewLastFinalizedBlock