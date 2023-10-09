import React, { useEffect, useState } from "react";

import { BigLabel, LoadingContainer } from "./MainPc.styled";
import {
  MainBottomBox,
  SmallLabel,
  SelectBox,
  Select,
  BtnBox,
  MakePlanBtn,
} from "./MainPc.styled";
import { useDispatch, useSelector } from "react-redux";
// gpt에 대한 reducer
import { insert, save, save2 } from "../../redux/features/dataForGpt";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { store } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { Loading2 } from "../loading/LoadingPc";
import { ipUrl } from "../../util/util";
const MainBottomPc = ({
  isDated,
  choiceSelected,
  startDate,
  endDate,
  gptAnswer,
  setGptAnswer,
}) => {
  const nav = useNavigate();
  const loading = "/imgs/icons/loading2.gif";

  let withArr = [
    "혼자",
    "친구와",
    "연인과",
    "배우자와",
    "아이와",
    "부모님과",
    "반려동물과",
  ];
  let whichArr = [
    "체험·액티비티",
    "SNS 핫플레이스",
    "자연과 함께",
    "유명 관광지는 필수",
    "여유롭게 힐링",
    "문화·예술·역사",
    "여행지 느낌 물씬",
    "쇼핑은 열정적으로",
    "관광보다 먹방",
  ];

  const [backColor, setBack] = useState("#edebeb");
  const [fontColor, setFont] = useState("#9b9a9a");

  const [choiceIndex1, setChoice1] = useState("");
  const [choiceIndex2, setChoice2] = useState("");
  // 로딩
  const [isLoading, setIsloading] = useState(false);

  // gpt의 응답

  // 키값으로 가져온 gpt의 대답중 key에 값이 불규칙적이므로 index로 불러오기 위헤 Object.keys(obj); 를 사용하여 key의 인덱스를 저장할거임
  // const [ansKey, setAnsKey] = useState("");
  //   gpt에게 보낼 일련의 데이터
  const gptDispatch = useDispatch();
  const gptData = useSelector((state) => {
    return state.gptSlice;
  });
  const dispatch = useDispatch();
  // post로 gptData를 서버로 보내는 함수
  const sendDataToGpt = async () => {
    ipUrl
      .post("/openAI", { gptData })
      .then((res) => {
        // gpt응답 여기서 state에 저장
        const data = JSON.parse(res.data.content);
        setGptAnswer(data);
        // const keys = Object.keys(data);
        // setAnsKey(keys);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useMutation으로 비동기적 처리
  const gptQuery = useMutation(sendDataToGpt);

  // mutation handle 함수
  const handleMuatation = async () => {
    try {
      await gptQuery.mutateAsync(gptData);
    } catch (error) {}
  };

  const [choiceAll, setAll] = useState(false);
  // 스크롤 내려오는 함수
  const goToTagScroll = () => {
    const ele = document.querySelector("#mainBottomBoxPc");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 누구와
  const isChoice1 = (index) => {
    if (choiceIndex1.indexOf(index) !== -1) {
      let arr = choiceIndex1.filter((value) => value !== index);
      let dataArr = gptData.choiceDataWho.filter((value) => {
        return value !== withArr[index];
      });
      setChoice1(arr);
      gptDispatch(insert({ ...gptData, choiceDataWho: dataArr }));
    } else {
      if (choiceIndex1 == "") {
        setChoice1([index]);
        gptDispatch(insert({ ...gptData, choiceDataWho: [withArr[index]] }));
      } else {
        setChoice1([...choiceIndex1, index]);
        gptDispatch(
          insert({
            ...gptData,
            choiceDataWho: [...gptData["choiceDataWho"], withArr[index]],
          })
        );
      }
    }
  };
  // 여행 스타일
  const isChoice2 = (index) => {
    if (choiceIndex2.indexOf(index) !== -1) {
      let arr = choiceIndex2.filter((value) => value !== index);
      let dataArr = gptData.choiceDataHow.filter((value) => {
        return value !== whichArr[index];
      });
      setChoice2(arr);

      gptDispatch(insert({ ...gptData, choiceDataHow: dataArr }));
    } else {
      if (choiceIndex2 == "") {
        setChoice2([index]);
        gptDispatch(insert({ ...gptData, choiceDataHow: [whichArr[index]] }));
      } else {
        setChoice2([...choiceIndex2, index]);
        gptDispatch(
          insert({
            ...gptData,
            choiceDataHow: [...gptData["choiceDataHow"], whichArr[index]],
          })
        );
      }
    }
  };

  useEffect(() => {
    choiceSelected(choiceIndex1, choiceIndex2);

    if (choiceIndex1.length > 0 && choiceIndex2.length > 0) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [choiceIndex1, choiceIndex2]);

  useEffect(() => {
    console.log(gptAnswer, "들어옴");
    if (gptAnswer) {
      gptDispatch(
        save({
          location: gptAnswer.location,
          attractions: gptAnswer.attractions,
          startDate: startDate,
          endDate: endDate,
          option1: choiceIndex1,
          option2: choiceIndex2,
        })
      );
    }

    let sd = new Date(startDate);
    let ed = new Date(endDate);
    let periodArr = [];
    while (sd <= ed) {
      periodArr.push(sd.getMonth() + 1 + "." + sd.getDate());
      sd.setDate(sd.getDate() + 1);
    }
    periodArr.map((value, index) => {
      dispatch(
        save2({
          day: (index + 1).toString(),
          plan: [],
        })
      );
    });
  }, [gptAnswer]);

  //   스크롤이 내려가는 함수를 useEffect로 감지 및 실행 zerohoney
  useEffect(() => {
    if (isDated) {
      goToTagScroll();
    }
  }, [isDated, isLoading]);
  const gptAnswerSaved = useSelector((state) => {
    return state.gptAnswerSave;
  });
  useEffect(() => {
    if (gptAnswerSaved.attractions.length > 0) {
      setIsloading(false);

      nav("/plan");
    }
  }, [gptAnswerSaved]);
  return (
    <>
      {isDated && (
        <MainBottomBox id="mainBottomBoxPc">
          <BigLabel>어떤 스타일의 여행을 할 계획인가요?</BigLabel>
          <SmallLabel>누구와</SmallLabel>
          <SelectBox>
            {withArr.map((value, index) => {
              if (choiceIndex1.indexOf(index) == -1) {
                return (
                  <Select
                    onClick={() => isChoice1(index)}
                    key={index}
                    back={backColor}
                    font={fontColor}
                  >
                    {value}
                  </Select>
                );
              } else {
                return (
                  <Select
                    onClick={() => isChoice1(index)}
                    key={index}
                    back={"#277bc0"}
                    font={"white"}
                  >
                    {value}
                  </Select>
                );
              }
            })}
          </SelectBox>
          <SmallLabel>여행 스타일</SmallLabel>
          <SelectBox>
            {whichArr.map((value, index) => {
              if (choiceIndex2.indexOf(index) == -1) {
                return (
                  <Select
                    onClick={() => {
                      isChoice2(index);
                    }}
                    key={index}
                    back={backColor}
                    font={fontColor}
                  >
                    {value}
                  </Select>
                );
              } else {
                return (
                  <Select
                    onClick={() => {
                      isChoice2(index);
                    }}
                    key={index}
                    back={"#277bc0"}
                    font={"white"}
                  >
                    {value}
                  </Select>
                );
              }
            })}
          </SelectBox>

          {choiceAll && (
            <BtnBox>
              <MakePlanBtn
                onClick={() => {
                  setIsloading(true);

                  // 마지막 날짜 변경후 버튼 클릭시 실행
                  handleMuatation();
                }}
              >
                완료
              </MakePlanBtn>
            </BtnBox>
          )}
          {isLoading && <Loading2></Loading2>}
        </MainBottomBox>
      )}
    </>
  );
};

export default MainBottomPc;
