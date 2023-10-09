const { createSlice } = require("@reduxjs/toolkit");

export const userInfoHandler = createSlice({
  name: "userInfo",
  initialState: {

  },
  reducers: {
    saveUser: (state, action) => {
      return action.payload
    },
    resetUser: (state, action) => {
      return {}
    }
  },
});

export const { saveUser, resetUser } = userInfoHandler.actions;
