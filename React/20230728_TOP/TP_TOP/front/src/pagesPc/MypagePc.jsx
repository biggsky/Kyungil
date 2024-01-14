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
  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(["getUserMypage"], tryGetUserInfo);

  return (
    <>
      <MypagePcBox>
        <MoveEditPc />

        {!isLoading && (
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
