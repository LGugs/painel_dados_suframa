import { HttpInstance } from "../utils/http";
import type { CardProps } from "../interfaces/Cards";

//#region MAO DE OBRA - CARDS
// abordagem melhorada. Utiliza URLSearchParams no qual constroi a url do GET de forma automatica
// ficou bem mais clean
export async function getCards(
  tipo: string,
  polo?: string
): Promise<CardProps[]> {
  const params = new URLSearchParams({ tipo });

  if (polo) {
    params.append("polo", polo);
  }

  const res = await HttpInstance.http.get<CardProps[]>(
    `/cards/getCards?${params.toString()}`
  );

  return res.data;
}

//#endregion
