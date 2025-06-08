import { HttpInstance } from "../utils/http";
import type { CardProps } from "../interfaces/Cards";

//#region MAO DE OBRA - CARDS
export async function getCards(tipo: string): Promise<CardProps[]> {
  const res = await HttpInstance.http.get<CardProps[]>(
    `/cards/getCards?tipo=${encodeURIComponent(tipo)}` // para passar strings com espaços vazios para o backend
  );

  return res.data;
}

//#endregion
