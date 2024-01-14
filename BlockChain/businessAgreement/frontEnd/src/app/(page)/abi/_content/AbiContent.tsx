"use client"

import React, { ChangeEvent } from 'react';

interface AbiContentProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

const AbiContent: React.FC<AbiContentProps> = ({label, value, onChange }) => {
  return (
    <div className="m-4">
    <label className="block mb-2 md:flex lg:flex">
      <span className="w-52 md:text-itemDetail-textLabelColor lg:text-itemDetail-textLabelColor">
        {label}:
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="block w-11/12 border border-gray rounded-md p-2"
      />
    </label>
  </div>
  )
}

export default AbiContent