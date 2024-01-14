import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { insert, reset, resetAttractionsWithImg } from "../redux/features/dataForGpt";

import BottomNav from "../components/nav/BottomNav";
import MainTop from "../components/main/MainTop";
import MainMid from "../components/main/MainMid";
import MainBottom from "../components/main/MainBottom";
import { useNavigate } from "react-router-dom";
import { resetSelectedUserPlan } from "../redux/features/selectedUserPlan";
import { ipUrl } from "../util/util";
import { useQuery } from "react-query";
import { saveUser } from "../redux/features/useInfo";
const Main = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const userOrGuest = useSelector((state) => {
    return state.userOrGuest;
  });

  const gptData = useSelector((state) => {
    return state.gptSlice;
  });

  // gpt에 요청할 content
  const [content, setContent] = useState({
    location: "",
    startDate: "",
    endDate: "",
    option1: "",
    option2: "",
  });

  // 지역 검색
  const [isSearched, setSearch] = useState(false);
  // 날짜 입력
  const [isDated, setDate] = useState(false);
  // 옵션 선택
  const [isChoiced, setChoice] = useState(false);

  
  // 지역 검색
  const locationSearched = (lo) => {
    if (lo == undefined) {
      return;
    } else {
      // 지역이 제대로 검색 되었을 시 (올바른 지역명인지 한 번 확인?)
      setSearch(true);
      setContent({
        ...content,
        location: lo,
      });
    }
  };
  // 날짜 입력
  const dateSelected = (sd, ed) => {
    setDate(true);
    setContent({
      ...content,
      startDate: sd,
      endDate: ed,
    });
  };
  // 옵션 선택
  const choiceSelected = (choiceIndex1, choiceIndex2) => {
    setChoice(true);
    setContent({
      ...content,
      option1: choiceIndex1,
      option2: choiceIndex2,
    });
  };

  // 다
  useEffect(() => {
    // dispatch 전송
    if (isChoiced) {
      dispatch(
        insert({
          ...gptData,
          location: content.location,
          date: `${content.startDate}~${content.endDate}`,
          choiceDataWho: content.option1,
          choiceDataHow: content.option2,
        })
      );
    }
  }, [content]);

  useEffect(() => {
    dispatch(reset());

    // 어드민 로그인이면 어드민 페이지로 이동
    if (userOrGuest.isAdmin == true) {
      nav("/admin");
    }
  }, []);



  useEffect(() => {
    dispatch(resetSelectedUserPlan());
    dispatch(resetAttractionsWithImg())
    
  }, []);
  return (
    <>
      <MainTop locationSearched={locationSearched} />
      {isSearched && <MainMid dateSelected={dateSelected} />}
      {isDated && (
        <MainBottom
          page={"main"}
          choiceSelected={choiceSelected}
          startDate={content.startDate}
          endDate={content.endDate}
        />
      )}

      <BottomNav page={"main"} />
    </>
  );
};

// const Popup = () => {
//     return (
//         <>
//             <PopupBox>
//                 <PopupBtn>
//                     <p>일정 만들러가기</p>
//                     <div className='btns'>
//                         <div className='btn btn1'>출발</div>
//                         <div className='btn btn2'>취소</div>
//                     </div>
//                 </PopupBtn>
//             </PopupBox>
//         </>
//     )
// }

export default Main;
