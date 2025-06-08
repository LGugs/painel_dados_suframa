// Oracledb por obrigatoriedade utiliza caixa alta
export interface MaoDeObra {
  POLO?: string;
  FEMININO: number;
  PNE: number;
  TOTAL: number;
}

export interface Cards {
  titulo: string;
  valor: number;
}

export interface CardQuery {
  tipo?: string;
}
