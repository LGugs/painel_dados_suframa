import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Polo } from "../../interfaces/Polos"

const initialState: Polo = {
  id: "",
  descricao: "TODOS OS POLOS"
};

const PoloSlice = createSlice({
  name: "PoloSlice",
  initialState,
  reducers: {
    setDashPolo: (state, action: PayloadAction<{ id: string, descricao: string }>) => {
      state.descricao = action.payload.descricao;
      state.id = action.payload.id;
      //return state; o return é opcional pois estou modificando o estado diretamente
    },
    resetDashPolo: (state) => {
      state.descricao = initialState.descricao;
      state.id = initialState.id;
      //return state; o return é opcional pois estou modificando o estado diretamente
    },
  },
});

export const { resetDashPolo, setDashPolo } = PoloSlice.actions;
export default PoloSlice.reducer;
