import React, { useState } from "react";

import ToggleComponent from "../ToggleComponent";

interface DetailWrapContentProps {
  toggleContent: string;
  label: string;
  contents: string;
  border?: boolean;
  key?: Number;
  toggleOnKey: Number;
  toggleOnKeyHandler: (onKey: Number) => void;
}

const DetailWrapContent: React.FC<DetailWrapContentProps> = ({
  toggleContent,
  label,
  contents,
  border = false,
  key = 0,
  toggleOnKey,
  toggleOnKeyHandler,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    toggleOnKeyHandler(key);
    setIsToggle(!isToggle);
  };

  return (
    <>
      <div
        className={`mb-4 mt-4 flex flex-wrap -mr-0.75 -ml-0.75 relative ${
          border ? "border-b" : ""
        }`}
      >
        <div
          className={`absolute top-0 left-6 z-10 w- transition-opacity duration-300 ${
            isToggle ? "opacity-100" : "opacity-0"
          }`}
        >
          {isToggle && toggleOnKey === key && (
            <ToggleComponent toggleContent={toggleContent} />
          )}
        </div>
        <img
          className="w-5 h-5 mr-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlmciWhoigexQda3BnFqx0AB2w3GyCRNMbg&usqp=CAU"
          alt=""
          onClick={handleClick}
        />
        <div className="text-#081D35 font-medium mb-2 max-w-xs">{label} :</div>
        <div>{contents}</div>
      </div>
    </>
  );
};

export default DetailWrapContent;
