import React from "react";
import ActivityTitle from "./ActivityTitle";
import ActivityContents from "./ActivityContents";
import { INftActivityProps } from "../../interface";


const NftActivity:React.FC<INftActivityProps> = ({activityData}) => {
  return (
    <div className="border-gray border-[1px] rounded-xl bg-white dark:bg-black/90">
      <ActivityTitle />
      <ActivityContents activityData={activityData} />
    </div>
  );
};

export default NftActivity;
