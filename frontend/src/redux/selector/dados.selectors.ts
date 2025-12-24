import type { RootState } from "../store";

export const selectTiposAtivos = (state: RootState) =>
  state.DadosReducer.ativos;

export const selectTipoFaltante = (state: RootState) =>
  state.DadosReducer.todos.find((t) => !state.DadosReducer.ativos.includes(t));
