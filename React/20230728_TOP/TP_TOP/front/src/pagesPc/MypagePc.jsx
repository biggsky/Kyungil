import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { ipUrl } from "../util/util";

import {
  MypageImgPc,
  TapMenuPc,
  MypageNamePc,
  MoveEditPc,
} from "../componentsPc/mypage";
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import { MypagePcBox } from "../componentsPc/mypage/MyPagePc.styled";
import { useNavigate } from "react-router-dom";

const Mypage = () => {

  // 로그아웃 로직! 여기서 부터
  const nav = useNavigate();

  const logoutHandler = async () => {
    const logout = await ipUrl.post("/user/logout");
    return logout;
  };
  const logoutMutation = useMutation("logout", logoutHandler, {
    onSuccess: (result) => {
      if (result.data === "success") {
        alert("로그아웃에 성공 하였습니다.");
        nav("/login");
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
    },
  });
  // 로그아웃 로직! 여기까지

  // 방법1-------------------------------------------------------------------------
  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      // alert("11");
      const response = await ipUrl.get(`/mypage/getInfo`);
      console.log("getInfo 정보");
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(["getUserMypage"], tryGetUserInfo,{
    staleTime: 60000, // 캐시가 60초 동안 최신이 아닌 상태로 간주
  });
  // tryGetUserInfo함수를 호출하여 api 요청을 함.
  // api 요청이 성공하면 data 속성에 응답 데이터를 저장.
  // api 요청이 실패하면 error 속성에 에러 정보를 저장.
  // api 요청이 진행 중일때는 isLoading 속성에 true 값을 저장.
  // 방법1-------------------------------------------------------------------------


  // 방법2-------------------------------------------------------------------------
  // const [isLoading, setIsLoading2] = useState(true);
  // const [data, setData] = useState();
  // useEffect(()=>{
  //   async function abc(){
  //     console.log("로그인1-true",isLoading);
  //     const response = await ipUrl.get(`/mypage/getInfo`);
  //     // const data = response.data;

  //     setIsLoading2(!isLoading);
  //     setData(response.data);
  //   }
  //   abc();
  // },[]);
  // 방법2-------------------------------------------------------------------------


  // useEffect(()=>{
  //   // console.log("로그인2-false",isLoading);
  //   if (isLoading) {
  //     let time = (Date.now() - performance.now()) / 1000000000000;
  //     console.log("", time + "초");
  //     console.log("순서",isLoading);
  //     // API 요청이 진행 중입니다.
  //   } else if (data) {
  //     console.log("순서",isLoading);
  //     console.log("정보", data);
  //     // API 요청이 성공했습니다.
  //   } else {
  //     alert("에러");
  //     // API 요청이 실패했습니다.
  //   }
  // },[data]);

  return (
    <>
      <MypagePcBox>
        <MoveEditPc />

        {!isLoading && (
          // isLoading이 false 이면 &&()를 반환한다. isLoading이 true면 아무것도 반환하지 않는다.
          // 현재 isLoading이라는건 진행중이라면 true라는 뜻인데.. 요청이 성공했으니 false를 반환
          <>
            <MypageImgPc profile_img={data.profile_img} />
            <MypageNamePc nickname={data.nickname} />
            <button
              style={{
                position: "absolute",
                top: "33%",
                left: "50%",
                transform: "translate(-50%, 0)",
                backgroundColor: "white",
                color: "#277bc0",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                logoutMutation.mutate();
              }}
            >
              로그아웃
            </button>
          </>
        )}

        <TapMenuPc user={data} />

        <BottomNavPc />
      </MypagePcBox>
    </>
  );
};

export default Mypage;
