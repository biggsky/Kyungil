import React, { useEffect } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex w-11/12 m-auto flex-wrap justify-between items-center border-b border-gray gap-3 py-5 ">
      <h1 className="font-semibold text-tablePage-textColor dark:text-white">
        {title}
      </h1>
    </div>
  );
};

export default Title;
