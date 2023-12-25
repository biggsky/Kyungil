import React from 'react'

const MainSearch = () => {
  return (
    <>
        <div className='bg-main_background_color w-full h-40 flex items-center justify-center'>
            {/* <h1 className=''>The Ethereum Blockchain Explorer</h1> */}
            {/* <form action=""> */}
                <div className='bg-white w-11/12 h-[50px] rounded-xl flex items-center'>
                    <input type="text" placeholder='Search by Address / Txn Hash / Block' className='w-10/12 ml-4' />
                    <span className='bg-main_search_bar w-7 flex items-center justify-center rounded-lg'>
                        <button>🔍</button>
                    </span>
                </div>
            {/* </form> */}
        </div>
    </>
  )
}

export default MainSearch