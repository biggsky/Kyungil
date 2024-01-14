import React from 'react'

export const WithdrawalHeader = () => {
  return (
    
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
    <tr className='text-sm '>
      <th className='py-2 min-w-[150px] font-semibold '>Index</th>
      <th className='min-w-[200px] font-semibold'>Block</th>
      <th className='min-w-[220px] font-semibold '>Age</th>
      <th className='min-w-[220px] font-semibold'>Recipient</th>
      <th className='min-w-[200px] font-semibold'>Value</th>
    </tr>
  </thead>
  )
}
