import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState: {
    title: "",
  },
  reducers: {
    setTitle: (state, { payload }) => {
      state.title = payload.title;
      return state;
    },
    eraseDashboardState: (state) => {
      state.title = "";
      return state;
    },
  },
});

export const { eraseDashboardState, setTitle } = DashboardSlice.actions;
export default DashboardSlice.reducer;
