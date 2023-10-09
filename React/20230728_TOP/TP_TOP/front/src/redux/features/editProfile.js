import { createSlice } from "@reduxjs/toolkit";

export const editProfile = createSlice({
  name: "editProfile",
  initialState: {
    nickname : "",
    profile_img : ""
  },
  reducers: {
    saveProfile: (state, action) => {
        console.log(action.payload)
    },
  },
});

export const {saveProfile} = editProfile.actions;