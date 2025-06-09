export const Meses = [
  "JANEIRO",
  "FEVEREIRO",
  "MARÇO",
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
  "NOVEMBRO",
  "DEZEMBRO",
];

export interface Faturamento {
  MES: number;
  TOTAL: number;
}

export interface MaoDeObra {
  FEMININA: number;
  MASCULINA: number;
}

export interface Graficos {
  name: string;
  value: number;
}
