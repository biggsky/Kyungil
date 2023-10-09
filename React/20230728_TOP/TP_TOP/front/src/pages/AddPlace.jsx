import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { save2 } from "../redux/features/dataForGpt";

import TopNav from "../components/nav/TopNav";
import AddPlaceTop from "../components/place/AddPlaceTop";
import AddPlaceMid from "../components/place/AddPlaceMid";
import AddPlaceBottom from "../components/place/AddPlaceBottom";
import { useDispatch, useSelector } from "react-redux";
import PlanMid from "../components/plan/PlanMid";
import { Padding } from "../components/place/Place.styled";

const AddPlace = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const day = queryParams.get("day");

  const [choiceIndex, setChoice] = useState([]);
  const [show, setShow] = useState(false);

  // nearPlace
  const [nearPlace, setnearPlace] = useState("");

  const [midHeight, setMidHeight] = useState("calc(100vh - 250px)");
  const [nearAttractopnLocation, setNearAttractopnLocation] = useState([]);
  // gpt 추천 관광지
  const gptAnswerSaved = useSelector((state) => {
    return state.gptAnswerSave;
  });
  // let suggested = gptAnswerSaved.attractions
  // let suggested = ['나카스', '오호리 공원', '덴진 지하상가', '하카타 역', '유후인', '어쩌고', '저쩌고', '1', '2', '3', '4', '5', '6', '7']


  useEffect(() => {
    if (choiceIndex.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [choiceIndex]);

  useEffect(() => {
    if (show) {
      setMidHeight("calc(100vh - 400px)");
    }
  }, [show]);

  // 선택 완료
  const tryComplete = () => {
    dispatch(
      save2({
        day: day,
        plan: choiceIndex,
      })
    );
    nav("/plan");
  };

  const userChoiceSaved = useSelector((state) => {
    return state.userChoiceSave;
  });


  // useEffect(() => {
  //   let index = Number(day);
  //   let arr = userChoiceSaved.planPerDay[index].plan;
  //   setChoice(arr);
  // }, []);

  return (
    <>
      <TopNav isScrolled={true} gptAnswerSaved={gptAnswerSaved} />

      {/* 지도 */}
      <Padding />
      <PlanMid
        nearAttractopnLocation={nearAttractopnLocation}
        choiceIndex={choiceIndex}
        nearPlace={nearPlace}
        setnearPlace={setnearPlace}
        gptAnswerSaved={gptAnswerSaved}
        page={"add"}
      />

      <AddPlaceMid
        page={"add"}
        day={day}
        choiceIndex={choiceIndex}
        setChoice={setChoice}
        midHeight={midHeight}
        setNearAttractopnLocation={setNearAttractopnLocation}
        nearPlace={nearPlace}
      />

      {/* place={place} */}

      {show && (
        <AddPlaceBottom choiceIndex={choiceIndex} tryComplete={tryComplete} />
      )}
    </>
  );
};

export default AddPlace;
