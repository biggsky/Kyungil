import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { INftDetailsItemProps } from '../../interface';


const NftDetailsItemLink:React.FC<INftDetailsItemProps> = ({name,address}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
  
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // 이 코드는 메모리 누수를 방지하고, 컴포넌트가 사라진 후에도 이벤트 리스너가 계속 활성화되어 있지 않도록 해서 애플리케이션의 성능을 개선하는 데 도움을 줍니다.
  }, []);


  const truncate = (hash: string) => {
    if(hash != undefined){
      return hash.substring(0, 18);
    }
  };
  let truncateHash = truncate(address) + "...";

  return (
    <li className='flex py-5'>
      <span className='text-stone-500 text-sm sm:w-[150px] md:w-1/3 lg:w-[350px]'>{name}:</span>
      <Link href='' className='text-text-mainTextColor text-xs md:w-2/3 lg:w-2/3 overflow-hidden flex items-center'>{windowWidth>=1410 ? address : truncateHash}</Link>
    </li>
  )
}

export default NftDetailsItemLink