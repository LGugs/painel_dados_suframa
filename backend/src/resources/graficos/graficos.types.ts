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

export interface Periodo {
  MES: number;
  TOTAL: number;
}

export interface MaoDeObra {
  TOTAL_DIRETA: number;
  TEMPORARIA: number;
  TERCEIRIZADA: number;
}

export interface Graficos {
  name: string;
  value: number;
}
