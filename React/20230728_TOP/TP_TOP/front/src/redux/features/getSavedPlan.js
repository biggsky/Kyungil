import { createSlice } from "@reduxjs/toolkit";

export const getSavedPlan = createSlice({
  name: "getSavedPlan",
  initialState: {
    savedPlan: "",
  },
  reducers: {
    getSaved: (state, action) => {
      console.log(action.payload,'리덕스');
      state.savedPlan = action.payload;
    },
  },
});

export const { getSaved } = getSavedPlan.actions;
