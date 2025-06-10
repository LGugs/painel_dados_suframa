// Oracledb por obrigatoriedade utiliza caixa alta
export interface Cards {
  titulo: string;
  valor: number;
}

export interface FaturamentoTotal {
  TOTAL: number;
}
export interface MaoDeObra {
  FEMININA: number;
  PNE: number;
  TOTAL_DIRETA: number;
  TEMPORARIA: number;
  TERCEIRIZADA: number;
  TOTAL_INDIRETA: number;
}
