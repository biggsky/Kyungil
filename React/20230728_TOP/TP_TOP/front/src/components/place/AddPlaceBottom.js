import React, { useEffect, useState } from "react";

import { AddBtn, Selected, ShowSelectedBox } from "./Place.styled";
import { pushPlan } from "../../redux/features/selectedUserPlan";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const AddPlaceBottom = ({ choiceIndex, tryComplete }) => {
  const city = "/imgs/places/city.jpeg";
  const noImg = "/imgs/icons/no-image.png";
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedUserPlanDispatch = useDispatch();
  const nav = useNavigate();
  // 최종적으로 선택된 유저의 플랜을 리덕스에 저장하는 함수
  const saveUserPlanToRedux = () => {

    const temp = choiceIndex.map((value) => {
      let img;
      if (value.img) {
        if (value.img.hits.length !== 0) {
          img = value.img.hits[0].largeImageURL;
        } else {
          img = noImg;
        }
      } else {
        img = noImg;
      }

      return {
        name: value.name,
        attractionLocation: value.attractionLocation,
        img,
      };
    });
 
  
    selectedUserPlanDispatch(
      pushPlan({
        day: searchParams.get("day"),
        plan: temp,
      })
    );
    nav('/plan')
  };

  return (
    <>
      <ShowSelectedBox>
        {choiceIndex.map((value, index) => {
          // img를 찾는 과정에서 img자체가 없거나 img는 있어도 hits의 배열이 비어있는 경우가 발생, 이를 조건문으로 거름
          let img;
          if (value.img) {
            if (value.img.hits.length !== 0) {
              img = value.img.hits[0].largeImageURL;
            } else {
              img = noImg;
            }
          } else {
            img = noImg;
          }

          return (
            <Selected key={index}>
              <p>{index + 1}</p>
              <img src={img} alt="선택된 이미지"></img>
              <div>{value.name}</div>
            </Selected>
          );
        })}
      </ShowSelectedBox>
      <AddBtn onClick={saveUserPlanToRedux}>선택완료</AddBtn>
    </>
  );
};

export default AddPlaceBottom;
