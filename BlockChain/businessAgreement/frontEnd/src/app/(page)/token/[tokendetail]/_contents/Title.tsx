import React from "react";

interface TitleProps {
  title: string;
  subtitle: React.ReactNode; 
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (

      <div className="flex w-11/12 m-auto  items-center border-b border-gray gap-3 py-5 dark:text-white">
        <h1 className="font-semibold text-tablePage-textColor">{title}</h1>
        <div className="text-black/50">{subtitle}</div>
      </div>
  );
};

export default Title;
