import React from 'react'
import LoadingGif from "../../../../public/Spinner-1s-200px-unscreen.gif"
import Image from 'next/image'

const Loading = () => {
  return (
    <div className=''>
      <div className="">
        <Image
         src={LoadingGif} 
         alt="Loading GIF" 
         width={100} 
         height={100} />
        <div>데이터를 불러오는 중입니다 잠시만 기다려주세요</div>
        </div>
    </div>
  )
}

export default Loading
