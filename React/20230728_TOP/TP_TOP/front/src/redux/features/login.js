const { createSlice } = require("@reduxjs/toolkit");

export const userOrGuest = createSlice({
  name: "userOrGuest",
  initialState: {
    isLogin: false,
    isAdmin: false,
    user_id : '',
    token_value : '',
  },
  reducers: {
    token: (state, action) => {
      const token_val = action.payload;
      state.token_value = token_val;
    },
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
      state.token_value = "";
    },
  },
});

export const { token, check, reset } = userOrGuest.actions;
