import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { ipUrl } from "../util/util";

import { saveUser } from "../redux/features/useInfo";

import styled, { keyframes } from "styled-components";
import "animate.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { insert, reset ,resetAttractionsWithImg} from "../redux/features/dataForGpt";
import MainTopPc from "../componentsPc/main/MainTopPc";
import MainMidPc from "../componentsPc/main/MainMidPc";
import MainBottomPc from "../componentsPc/main/MainBottomPc";
import { resetSelectedUserPlan } from "../redux/features/selectedUserPlan";
// fadeIn
const FadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`;
const FadeInMainMid = styled(MainMidPc)`
  animation: ${FadeInAni} 15s ease-in-out;
`;

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
  const [gptAnswer, setGptAnswer] = useState("");

  // 현재 로그인한 유저의 정보를 가져오는 로직
  const getLoginUserInfoHandler= async()=>{
    
    const getLoginUserInfo= await ipUrl.get('/user/loginUser');
      return getLoginUserInfo.data;
  }

  // // 현재 로그인한 유저의 정보를 가져오는 로직 query
  // const getLoginUserInfoQuery=useQuery(['getLoginUserInfoQuery'],getLoginUserInfoHandler,{
  //   onSuccess:(data)=>{
  //     if (data==="다시 로그인 해주세요") {
  //       alert('현재 로그인이 안되어 있습니다. 추천된 관광지를 저장하려면 로그인 해주세요')
  //       // console.log('asd')
  //     }else{
  //     console.log(data)
  //     dispatch(saveUser(data))
        
  //     }
  //   },
  //   staleTime:5000
  // })


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
      <MainTopPc locationSearched={locationSearched} />
      {isSearched && (
        <MainMidPc dateSelected={dateSelected} isSearched={isSearched} />
      )}

      <MainBottomPc
        page={"main"}
        isDated={isDated}
        choiceSelected={choiceSelected}
        startDate={content.startDate}
        endDate={content.endDate}
        gptAnswer={gptAnswer}
        setGptAnswer={setGptAnswer}
      />
      {/* {isDated && (
        // <QueryClientProvider client={queryClient}  contextSharing={true}>
        // </QueryClientProvider>
      )} */}

      <BottomNavPc />
    </>
  );
};

export default Main;
