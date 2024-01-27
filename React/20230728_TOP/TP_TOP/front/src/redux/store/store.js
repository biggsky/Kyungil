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

// persist설치 후 추가한 코드
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  gptSlice: gptSlice.reducer,
  gptAnswerSave: gptAnswerSave.reducer,
  attractionsWithImg: attractionsWithImg.reducer,
  userChoiceSave: userChoiceSave.reducer,
  BoardDetailSlice: BoardDetailSlice.reducer,
  selectedUserPlan: selectedUserPlan.reducer,
  userOrGuest: userOrGuest.reducer,
  getSavedPlan: getSavedPlan.reducer,
  userInfoHandler: userInfoHandler.reducer
})

const persistConfig = {
  key : "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store, persistor};
// --------------------


// const store = configureStore({
//   reducer: {
//     gptSlice: gptSlice.reducer,
//     gptAnswerSave: gptAnswerSave.reducer,
//     attractionsWithImg: attractionsWithImg.reducer,
//     userChoiceSave: userChoiceSave.reducer,
//     BoardDetailSlice: BoardDetailSlice.reducer,
//     selectedUserPlan: selectedUserPlan.reducer,
//     userOrGuest: userOrGuest.reducer,
//     getSavedPlan: getSavedPlan.reducer,
//     userInfoHandler: userInfoHandler.reducer
//   },
// });

// export  { store };