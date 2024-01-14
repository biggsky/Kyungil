import React from "react";
import { INftALTotalRecordProps } from "../../interface";

const NftALTotalRecord: React.FC<INftALTotalRecordProps> = ({ totalCount }) => {
  return (
    <>
      <div className='p-5 text-stone-500'>
        A total of {totalCount} records found
      </div>
    </>
  );
};

export default NftALTotalRecord;
