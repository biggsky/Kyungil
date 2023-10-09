const { createSlice } = require("@reduxjs/toolkit");

export const userOrGuest = createSlice({
  name: "userOrGuest",
  initialState: {
    isLogin: false,
    isAdmin: false,
    user_id : ''
  },
  reducers: {
    check: (state, action) => {
      const user_id = action.payload;
      state.isLogin = true;
      state.isAdmin = false;
      state.user_id = user_id;

      if (user_id == "admin1234") {
        state.isAdmin = true;
      }
    },
    reset: (state, action) => {
      state.isLogin = false;
      state.isAdmin = false;
    },
  },
});

export const { check, reset } = userOrGuest.actions;
