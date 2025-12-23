import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Dados } from "../../interfaces/Dados"

const initialState: Dados[] = [
  {id: "1", descricao: "Faturamento"},
  {id: "2", descricao: "Mão de Obra"},
];

const DadosSlice = createSlice({
  name: "DadosSlice",
  initialState,
  reducers: {
    setDashDados: (_state: Dados[], action: PayloadAction<Dados[]>) => {
      return action.payload;
    },
    resetDashDados: () => {
      return initialState;
    },
  },
});

export const { resetDashDados, setDashDados } = DadosSlice.actions;
export default DadosSlice.reducer;
