"use client"

import React, { ChangeEvent } from 'react';

interface AbiContentProps {
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

const AbiFile: React.FC<AbiContentProps>= ({ label, onChange }) => {
    return (
      <div className="m-4">
        <label className="block mb-2 md:flex lg:flex">
          <span className="w-52 md:text-itemDetail-textLabelColor lg:text-itemDetail-textLabelColor">
            {label}:
          </span>
          <input
            type="file"
            onChange={onChange}
            className="block w-11/12 text-sm"
          />
        </label>
      </div>
    );
  };

export default AbiFile