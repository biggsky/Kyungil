import React, { useState } from "react";
import DetailWrapContent from "./ItemDetailContent";
interface IDetailWrapDataList {
  detailWrapDataList: {
    contents: string;
    label: string;
    toggleContent: string;
  }[];
}
const DetailWrap: React.FC<IDetailWrapDataList> = ({ detailWrapDataList }) => {
  const [activeToggle, setActiveToggle] = useState<number | null>(null);
  const [toggleOnKey, setToggleOnKey] = useState<Number | null>(null);
  const handleToggleClick = (index: number) => {
    setActiveToggle((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleOnKeyHandler = (onKey: Number) => {
    setToggleOnKey(onKey);
  };

  return (
    <div className="flex flex-col m-auto shadow-md w-5/6  break-all bg-white rounded-md max-w-xl p-5 mb-3 h-[240px] ">
      {detailWrapDataList.map(({ contents, label, toggleContent }, index) => (
        <DetailWrapContent
          contents={contents}
          label={label}
          toggleContent={toggleContent}
          key={index}
          toggleOnKey={toggleOnKey as Number}
          toggleOnKeyHandler={toggleOnKeyHandler}
        />
      ))}
    </div>
  );
};

export default DetailWrap;
