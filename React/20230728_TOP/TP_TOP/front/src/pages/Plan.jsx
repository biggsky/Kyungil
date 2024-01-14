import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BottomNav from "../components/nav/BottomNav";
import TopNav from "../components/nav/TopNav";

import PlanTop from "../components/plan/PlanTop";
import PlanMid from "../components/plan/PlanMid";
import PlanBottom from "../components/plan/PlanBottom";
import NoPlan from "../components/plan/NoPlan";

const Plan = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const gptAnswerSaved = useSelector((state) => {
    return state.gptAnswerSave;
  });
  // 유저가 클릭한 데이의 인덱스, 즉 해당 플랜을 클릭시 그 플랜안에 있는 장소의 위치를 찍어주기 위해 만든 state 이 값은 plabMidPc에서 쓰며, set함수는 PlanBottomPc에서 사용한다.
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  const userChoiceSaved = useSelector((state) => {
    return state.userChoiceSave;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 101;

      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (gptAnswerSaved.location == "") {
    return (
      <>
        <TopNav />
        <NoPlan />
        <BottomNav page={"plan"} />
      </>
    );
  } else {
    return (
      <>
        <TopNav isScrolled={isScrolled} gptAnswerSaved={gptAnswerSaved} />

        <PlanTop gptAnswerSaved={gptAnswerSaved} />
        <PlanMid
          isScrolled={isScrolled}
          gptAnswerSaved={gptAnswerSaved}
          page={"plan"}
          selectedPlanIndex={selectedPlanIndex}
        />
        <PlanBottom
          isScrolled={isScrolled}
          gptAnswerSaved={gptAnswerSaved}
          userChoiceSaved={userChoiceSaved}
          setSelectedPlanIndex={setSelectedPlanIndex}
        />

        <BottomNav page={"plan"} />
      </>
    );
  }
};

export default Plan;
