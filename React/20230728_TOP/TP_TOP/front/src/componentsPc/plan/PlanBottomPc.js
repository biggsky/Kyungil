import React, { useEffect, useState } from "react";
import {
  PlanBottomBox,
  PerDayBox,
  PerDayDate,
  PerDayAttraction,
  RouteBox,
  RouteNumber,
  RoutePlace,
  BtnBox,
  SavePlanBtn,
  EditPlanBtn,
} from "./PlanPc.styled";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { saveAttractionsWithImg } from "../../redux/features/dataForGpt";
import { ipUrl } from "../../util/util";

// 지도 아래 일정 부분
const PlanBottomPc = ({
  isScrolled,
  gptAnswerSaved,
  userChoiceSaved,
  setSelectedPlanIndex,
}) => {
  // 일정 며칠인지
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });
  const userOrGuest = useSelector((state) => {
    return state.userOrGuest;
  });

  // period
  const [periodArr, setPeriodArr] = useState([]);
  // 유저가 선택한 지역중 일별 일정만
  const { planPerDay } = userChoiceSaved;

  // attractions을 반복시키기위해 만든 임시 state
  const [attArrForMap, setAttArrForMap] = useState("");

  // 이미지 url이 포함된 새로운attractions state(redux)
  const attractionsWithImg = useSelector((state) => {
    return state.attractionsWithImg;
  });
  // attractionsWithImg를 저장하는 dispatch
  const attractionsWithImgDispatch = useDispatch();

  const nav = useNavigate();

  // 유저가 세운 계획을 저장하는 로직
  const saveUserPlan = async () => {
    const savePlan = await ipUrl.post("/plan/save", {
      selectedUserPlan,
      duration: `${gptAnswerSaved.startDate}~${gptAnswerSaved.endDate}`,
      name: gptAnswerSaved.location,
      who: gptAnswerSaved.option1,
      how: gptAnswerSaved.option2,
    });
    if (savePlan.data === "success") {
      nav("/");
    } else {
      alert("오류가 발생하였습니다. 다시 시도해 주시기 바랍니다");
      nav("/");
    }
  };
  // 여기서 부터
  const getAttPic = async (queryKey) => {
    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
    var URL =
      "https://pixabay.com/api/?key=" +
      apiKey +
      "&q=" +
      encodeURIComponent(queryKey);

    const getAttPicRes = await ipUrl.get(URL, {
      withCredentials: false,
    });
    return getAttPicRes.data;
  };

  const getAttPicQuerys = useQueries(
    attractions.map((value) => {
      return {
        queryKey: ["getAttPic", value.name],
        queryFn: () => getAttPic(value.name),
        staleTime: 60 * 60 * 1000,
        onSuccess: (data) => {
          attractionsWithImgDispatch(
            saveAttractionsWithImg({ ...value, img: data })
          );
        },
      };
    })
  );
  // 여기까지 이미지를 api로 받아오는 로직, attractionsWithImg에 기존 attraction값에 img가 추가로 들어감.

  useEffect(() => {
    // 기간인 period를 저장하는 로직
    let temp = [];
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    while (sd <= ed) {
      temp.push(sd.getMonth() + 1 + "." + sd.getDate());
      sd.setDate(sd.getDate() + 1);
    }
    setPeriodArr(temp);
  }, [attractions]);

  return (
    <>
      <PlanBottomBox id="bottom-box">
        {periodArr.map((value, index) => {
          return (
            <PerDayPc
              key={index}
              period={value}
              index={index + 1}
              place={planPerDay[index + 1].plan}
              setSelectedPlanIndex={setSelectedPlanIndex}
            />
          );
        })}

        <BtnBox>
          {userOrGuest.isLogin && (
            <SavePlanBtn onClick={saveUserPlan}>저장</SavePlanBtn>
          )}
          {!userOrGuest.isLogin && (
            <SavePlanBtn
              onClick={() => {
                alert("로그인 후 이용 가능");
              }}
              col={"silver"}
            >
              저장
            </SavePlanBtn>
          )}
        </BtnBox>
      </PlanBottomBox>
    </>
  );
};

// 1일마다 관광지 보여주는 부분
const PerDayPc = ({ period, index, place, imgSrc, setSelectedPlanIndex }) => {
  const nav = useNavigate();
  const [dayPlanArr, setDayPlanArr] = useState([]);
  const noImage = "/img/icons/no-image.png";
  const city = "/imgs/places/city.jpeg";
  // 관광지 검색 & 추가 페이지로 이동
  const moveToAdd = (id) => {
    // 해당 plan의 해당 날짜에 대한 id
    nav(`/addPlace/${id}?day=${id}`);
  };
  // 유저가 선택한 plan을 가져오는 selector
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });

  // 해당하는 날짜를 찾고  그 plan을dayPlanArr에 저장하는 함수
  useEffect(() => {
    const temp = selectedUserPlan.filter((el) => {
      return parseInt(el.day) === parseInt(index);
    });
    setDayPlanArr(temp);
  }, [selectedUserPlan]);
  return (
    <>
      <PerDayBox
        onClick={() => {
          // SelectedPlanIndex는 누른 index를 따라간다. 하지만 plan은 유저가 저장을 한 날만 채워진다. 예를들어
          // 1,3,5일을 유저가 계획을 세웠다면 plan의 array는 length가 3이고, index(1)은 두번째 날이다.
          // 하지만 아래 코드에서 두번째 계획을 누르면 index가 1이 되고 plan의 인덱스 1을 찾는다. 즉, 두번째 날을 클릭하면
          // 세번째날이 출력되는 버그 발생. 이를 방지하기위해 index가 아니라 day를 넘겨줘 PlanMidPc에서 findIndex로 해당하는 day의 index를 찾는다.
          if (dayPlanArr.length !== 0) {
            setSelectedPlanIndex(dayPlanArr[0].day);
          }
        }}
      >
        {/* 날짜 */}
        <PerDayDate>
          <p>
            <span>day {index}</span>
            {period}
          </p>
        </PerDayDate>

        {/* 관광지 하나 */}
        {dayPlanArr.length !== 0 &&
          dayPlanArr[0].plan.map((value, index) => {
            return (
              <PerDayAttraction>
                <RouteBox>
                  <RouteNumber>
                    <span></span>
                    <div>{index + 1}</div>
                  </RouteNumber>
                  <RoutePlace>
                    <div>
                      <p>{value.name}</p>
                      <img src={value.img} alt="관광이미지" />
                    </div>
                  </RoutePlace>
                </RouteBox>
              </PerDayAttraction>
            );
          })}
        {/* 장소 편집 버튼 */}
        <BtnBox>
          <EditPlanBtn
            onClick={() => {
              moveToAdd(index);
            }}
          >
            일정 편집
          </EditPlanBtn>
        </BtnBox>
      </PerDayBox>
    </>
  );
};

export default PlanBottomPc;
