const { createSlice } = require("@reduxjs/toolkit");

export const selectedUserPlan = createSlice({
  name: "selectedUserPlan",
  initialState: [],
  reducers: {
    pushPlan: (state, action) => {
      const dayToUpdateIndex = state.findIndex(
        (value) => Number(value.day) === Number(action.payload.day)
      );

      if (dayToUpdateIndex !== -1) {
        state[dayToUpdateIndex] = {
          ...state[dayToUpdateIndex],
          plan: action.payload.plan,
        };
      } else {
        state.push({ day: action.payload.day, plan: action.payload.plan });
      }
    },
    resetSelectedUserPlan: (state, action) => {
      return [];
    },
  },
});

export const { pushPlan, resetSelectedUserPlan } = selectedUserPlan.actions;
