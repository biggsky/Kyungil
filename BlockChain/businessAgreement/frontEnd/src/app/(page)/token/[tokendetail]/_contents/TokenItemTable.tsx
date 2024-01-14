import React from 'react'

const TokenItemTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-3 px-3 bg-white rounded-lg m-3 shadow-md h-[240px] dark:bg-black dark:text-white">

      {children}
    </div>
  )
}

export default TokenItemTable