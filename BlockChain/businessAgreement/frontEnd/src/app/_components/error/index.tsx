"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import icon from '../../../../public/Logo.png';

const Error = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((count) => {
        if (count === 1) {
          clearInterval(timer);
          router.push('/');
        }
        return count - 1;
      });
    }, 1000);

    if (countdown === 1) {
      clearInterval(timer);
      router.push('/');
    }

    return () => clearInterval(timer);
  }, [router, countdown]);

  return (
    <div className='p-10 m-10 flex justify-center items-center flex-col min-h-[600px]'>
      <Image alt='' src={icon} width={300} height={300} />
      <div className='flex flex-col items-center mt-5'>
        <div className='text-text-mainTextColor text-base font-semibold min-w-[280px]'>
          요청하신 내용을 확인할 수 없습니다
        </div>
        <div className='text-sm'>{countdown}초 뒤에 메인 페이지로 이동합니다</div>
      </div>
    </div>
  );
};

export default Error;