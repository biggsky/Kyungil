import { configureStore } from "@reduxjs/toolkit";
import {
  gptAnswerSave,
  gptSlice,
  userChoiceSave,
  attractionsWithImg,
} from "../features/dataForGpt";
import { selectedUserPlan } from "../features/selectedUserPlan";
import { BoardDetailSlice } from "../features/post";
import { userOrGuest } from "../features/login";
import { getSavedPlan } from "../features/getSavedPlan";
import { userInfoHandler } from "../features/useInfo";

const store = configureStore({
  reducer: {
    gptSlice: gptSlice.reducer,
    gptAnswerSave: gptAnswerSave.reducer,
    attractionsWithImg: attractionsWithImg.reducer,
    userChoiceSave: userChoiceSave.reducer,
    BoardDetailSlice: BoardDetailSlice.reducer,
    selectedUserPlan: selectedUserPlan.reducer,
    userOrGuest: userOrGuest.reducer,
    getSavedPlan: getSavedPlan.reducer,
    userInfoHandler: userInfoHandler.reducer
  },
});

export { store };
