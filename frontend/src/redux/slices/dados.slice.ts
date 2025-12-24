import { createSlice } from "@reduxjs/toolkit";
import { type Dados } from "../../interfaces/Dados";

const initialState: Dados = {
  ativos: ["Faturamento", "Mão de Obra"],
  todos: ["Faturamento", "Mão de Obra", "Investimento"],
};

const DadosSlice = createSlice({
  name: "DadosSlice",
  initialState,
  reducers: {
    substituirEsquerda(state) {
      const faltante = state.todos.find((t) => !state.ativos.includes(t))!;
      state.ativos[0] = faltante;
    },
    substituirDireita(state) {
      const faltante = state.todos.find((t) => !state.ativos.includes(t))!;
      state.ativos[1] = faltante;
    },
  },
});

export const { substituirEsquerda, substituirDireita } = DadosSlice.actions;
export default DadosSlice.reducer;
