import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    choiceDataWho: [],
    choiceDataHow: [],
    location: "",
    date: "",
  },
  reducers: {
    insert: (state, action) => {
      state.choiceDataWho = action.payload.choiceDataWho;
      state.choiceDataHow = action.payload.choiceDataHow;
      state.location = action.payload.location;
      state.date = action.payload.date;
    },
  },
});

export const gptAnswerSave = createSlice({
  name: "gptAnswerSave",
  initialState: {
    location: "",
    attractions: [],
    startDate: "",
    endDate: "",
    option1: [],
    option2: [],
  },
  reducers: {
    save: (state, action) => {
      state.location = action.payload.location;
      state.attractions = action.payload.attractions;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.option1 = action.payload.option1;
      state.option2 = action.payload.option2;
    },
    reset: (state, action) => {
      state.location = "";
      state.attractions = [];
      state.startDate = "";
      state.endDate = "";
      state.option1 = [];
      state.option2 = [];
    },
  },
});

// 이미지 url이 포함된 gpt답변이다. 관광지의 이름과 위도경도,이미지,디테일이 들어간다.
export const attractionsWithImg = createSlice({
  name: "attractionsWithImg",
  initialState: [],
  reducers: {
    saveAttractionsWithImg: (state, action) => {
      state.push({
        attractionLocation: action.payload.attractionLocation,
        detail: action.payload.detail,
        img: action.payload.img,
        name: action.payload.name,
        nearAttraction: [],
      });
    },
    // 관광지 주위에있는 관광지 저장
    saveNearAttraction: (state, action) => {
      state.forEach((value, index) => {
        if (!action.payload.length === 0) {
          alert("로드중 오류가 발생하였습니다. 새로고침후 다시 이용해 주세요.");
        } else {
          if (value.name === action.payload[0].parentName) {
            state[index].nearAttraction = action.payload;
          }
        }
      });
    },
    resetAttractionsWithImg: (state, action) => {
      return [];
    },
  },
});

export const userChoiceSave = createSlice({
  name: "userChoiceSave",
  initialState: {
    planPerDay: [
      {
        day: "",
        plan: [],
      },
    ],
  },
  reducers: {
    save2: (state, action) => {
      const { day, plan } = action.payload;

      if (state.planPerDay.day == "") {
        state.planPerDay.day = day;
        state.planPerDay.plan = plan;
      } else {
        // 이미 해당 day에 값이 있는지 확인
        const existingDayIndex = state.planPerDay.findIndex(
          (item) => item.day === day
        );

        if (existingDayIndex !== -1) {
          // 이미 해당 day에 값이 있는 경우, 해당 day의 plan을 변경
          state.planPerDay[existingDayIndex].plan = plan;
        } else {
          // 해당 day에 값이 없는 경우, 새로운 day 항목 추가
          state.planPerDay.push({ day, plan });
        }
      }
    },
  },
});

export const { insert } = gptSlice.actions;
export const { save, reset } = gptAnswerSave.actions;
export const { saveAttractionsWithImg, saveNearAttraction,resetAttractionsWithImg } =
  attractionsWithImg.actions;

export const { save2 } = userChoiceSave.actions;
