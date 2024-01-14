"use client"

import React from 'react';

interface PreviewProps {
  label: string;
  content: string;
}

const AbiPreviewContent: React.FC<PreviewProps> = ({ label, content }) => {
  return (
    <div className={`m-4 mb-2  md:flex lg:flex`}>
      <span className="w-52 md:text-itemDetail-textLabelColor lg:text-itemDetail-textLabelColor">
        {label}:
      </span>
      <div className={`overflow-y-auto border rounded-lg block w-11/12 border-gray p-2  ${label === 'ABI JSON' ? 'h-52' : 'h-16'}`}>{content}</div>
    </div>
  );
};

export default AbiPreviewContent;
