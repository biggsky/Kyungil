import React from 'react';

interface TokenCardContentProps {
  label: string;
  content:string
}

const TokenCardContent: React.FC<TokenCardContentProps> = ({ label,content }) => {
  return (
    <div>
      <div className='text-xs tracking-[0.5px] uppercase text-[var(--bs-secondary-color)] font-normal mb-1'>
        <span className='whitespace-normal'>라벨</span>
      </div>
      <div className='flex items-center text-xs font-normal'>
        <span>content</span>
      </div>
    </div>
  );
};

export default TokenCardContent;