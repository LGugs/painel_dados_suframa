export type TipoDado = "Faturamento" | "Mão de Obra" | "Investimento";

export interface Dados {
  ativos: TipoDado[]; // Sempre dois somente
  todos: TipoDado[]; // referencia fixa
}
