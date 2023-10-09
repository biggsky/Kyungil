import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQueries } from "react-query";

import {
  PlanBottomBox,
  PerDayBox,
  PerDayDate,
  PerDayAttraction,
  RouteBox,
  RouteNumber,
  RoutePlace,
} from "./Plan.styled";

import { saveAttractionsWithImg } from "../../redux/features/dataForGpt";
import { ipUrl } from "../../util/util";

// 지도 아래 일정 부분
const PlanBottomX = ({
  isScrolled,
  gptAnswerSaved,
  userChoiceSaved,
  setSelectedPlanIndex,
}) => {
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;

  // attractions을 반복시키기위해 만든 임시 state
  const [attArrForMap, setAttArrForMap] = useState("");

  // period
  const [periodArr, setPeriodArr] = useState([]);
  // 이미지 url이 포함된 새로운attractions state(redux)
  const attractionsWithImg = useSelector((state) => {
    return state.attractionsWithImg;
  });
  // attractionsWithImg를 저장하는 dispatch
  const attractionsWithImgDispatch = useDispatch();
  // 유저가 선택한 plan을 가져오는 selector
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });

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

  useEffect(() => {
    //  attractions state를 jsx에 쓰기 위하여 만든 임시 배열AttArrForMap에 0을 저장하는 로직
    // 이미지를 저장하는 로직
    let temp = [];
    attractions.forEach((value, index) => {
      temp.push(0);
    });
    setAttArrForMap(temp);
  }, [attractions]);

  // 여기까지 이미지를 api로 받아오는 로직, attractionsWithImg에 기존 attraction값에 img가 추가로 들어감.

  useEffect(() => {
    let temp = [];
    let sd = new Date(startDate);
    let ed = new Date(endDate);

    while (sd <= ed) {
      temp.push(sd.getMonth() + 1 + "." + sd.getDate());
      sd.setDate(sd.getDate() + 1);
    }
    setPeriodArr(temp);
  }, [attractions]);

  const planPerDay = userChoiceSaved;

  // 스크롤 일정 이상 넘어가면
  useEffect(() => {
    const bottomBox = document.getElementById("bottom-box");

    if (isScrolled) {
      bottomBox.style.padding = "210px 10px 70px 10px";
    } else {
      bottomBox.style.padding = "10px 10px 70px 10px";
    }
  }, [isScrolled]);

  return (
    <>
      <PlanBottomBox id="bottom-box">
        {periodArr.map((value, index) => {
          if (planPerDay.length > index) {
            console.log(planPerDay[index][0].day, "데이");
            return (
              <PerDay
                key={index}
                period={periodArr[index]}
                index={planPerDay[index][0].day}
                place={planPerDay[index]}
                attractionsWithImg={attractionsWithImg}
                setSelectedPlanIndex={setSelectedPlanIndex}
                userChoiceSaved={userChoiceSaved}
              />
            );
          } else {
            return <></>;
          }
        })}
      </PlanBottomBox>
    </>
  );
};

// 1일마다 관광지 보여주는 부분
const PerDay = ({
  period,
  index,
  place,
  attractionsWithImg,
  setSelectedPlanIndex,
  userChoiceSaved,
}) => {
  const [dayPlanArr, setDayPlanArr] = useState([]);
  const noImage = "/img/icons/no-image.png";
  const nav = useNavigate();

  // 유저가 선택한 plan을 가져오는 selector
  const selectedUserPlan = useSelector((state) => {
    return state.selectedUserPlan;
  });

  // 해당하는 날짜를 찾고  그 plan을dayPlanArr에 저장하는 함수
  useEffect(() => {
    const temp = userChoiceSaved.filter((el) => {
      return parseInt(el[0].day) === parseInt(index);
    });
    setDayPlanArr(temp);
  }, [selectedUserPlan]);
  useEffect(() => {
    console.log(place, "플레");
  }, [place]);

  return (
    <>
      <PerDayBox
        onClick={() => {
          console.log("퍼데이 눌림", dayPlanArr);
          // SelectedPlanIndex는 누른 index를 따라간다. 하지만 plan은 유저가 저장을 한 날만 채워진다. 예를들어
          // 1,3,5일을 유저가 계획을 세웠다면 plan의 array는 length가 3이고, index(1)은 두번째 날이다.
          // 하지만 아래 코드에서 두번째 계획을 누르면 index가 1이 되고 plan의 인덱스 1을 찾는다. 즉, 두번째 날을 클릭하면
          // 세번째날이 출력되는 버그 발생. 이를 방지하기위해 index가 아니라 day를 넘겨줘 PlanMid에서 findIndex로 해당하는 day의 index를 찾는다.
          if (dayPlanArr.length !== 0) {
            setSelectedPlanIndex(dayPlanArr[0][0].day);
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
        {place.length !== 0 &&
          place.map((value, index) => {
            return (
              <PerDayAttraction>
                <RouteBox>
                  <RouteNumber>
                    <span></span>
                    <div>{index + 1}</div>
                  </RouteNumber>
                  <RoutePlace>
                    <div className="place-box">
                      <p>{value.att_name}</p>
                    </div>
                  </RoutePlace>
                </RouteBox>
              </PerDayAttraction>
            );
          })}
      </PerDayBox>
    </>
  );
};

export default PlanBottomX;
