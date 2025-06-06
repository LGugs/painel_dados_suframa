import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
  title: string;
}

const initialState: DashboardState = {
  title: "Acumulado",
};

const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    setDashPolo: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
      //return state; o return é opcional pois estou modificando o estado diretamente
    },
    eraseDashPolo: (state) => {
      state.title = "";
      //return state; o return é opcional pois estou modificando o estado diretamente
    },
  },
});

export const { eraseDashPolo, setDashPolo } = DashboardSlice.actions;
export default DashboardSlice.reducer;
