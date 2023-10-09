import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import TopNavPc from "../componentsPc/nav/TopNavPc";

import PlanTopPc from "../componentsPc/plan/PlanTopPc";
import PlanMidPc from "../componentsPc/plan/PlanMidPc";
import PlanBottomXPc from "../componentsPc/plan/PlanBottomXPc";

const EditPlanPc = () => {
  const getSavedPlan = useSelector((state) => {
    return state.getSavedPlan;
  });

  const [gptAnswerSaved, setGptAnswerSaved] = useState("");
  const [userChoiceSaved, setUserChoiceSaved] = useState("");

  // 유저가 클릭한 데이의 인덱스, 즉 해당 플랜을 클릭시 그 플랜안에 있는 장소의 위치를 찍어주기 위해 만든 state 이 값은 plabMidPc에서 쓰며, set함수는 PlanBottomPc에서 사용한다.
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  //   const userChoiceSaved = useSelector((state) => {
  //     return state.userChoiceSave;
  //   });

  useEffect(() => {
    const { plan, attraction } = getSavedPlan.savedPlan;

    const dateString = plan.duration;
    const [startDate, endDate] = dateString.split("~").map((date) => date);

    setGptAnswerSaved({
      location: plan.plan,
      attractions: attraction,
      startDate: startDate,
      endDate: endDate,
      option1: [attraction[0].who],
      option2: [attraction[0].how],
    });

    let finalArr = [];

    attraction.map((value, index) => {
      let arr = attraction.filter((item) => item.day == index + 1);
      if (arr.length !== 0) {
        console.log(arr, "준파이널");
        finalArr.push(arr);
      }
    });

    console.log(finalArr, "파이널");
    setUserChoiceSaved(finalArr);
  }, []);



  return (
    <>
      {gptAnswerSaved && (
        <>
          <TopNavPc  gptAnswerSaved={gptAnswerSaved} />

          <PlanTopPc gptAnswerSaved={gptAnswerSaved} />
          <PlanMidPc
            gptAnswerSaved={gptAnswerSaved}
            page={"plan"}
            selectedPlanIndex={selectedPlanIndex}
            userChoiceSaved={userChoiceSaved}
          />
          <PlanBottomXPc
            gptAnswerSaved={gptAnswerSaved}
            userChoiceSaved={userChoiceSaved}
            setSelectedPlanIndex={setSelectedPlanIndex}
          />

          <BottomNavPc page={"plan"} />
        </>
      )}
    </>
  );
};

export default EditPlanPc;
