import { HttpInstance } from "../utils/http";
import type { GraficoData } from "../interfaces/Graficos";

//#region MAO DE OBRA - GRAFICO
export async function getGrafico(
  tipo: string,
  polo?: string
): Promise<GraficoData[]> {
  const params = new URLSearchParams({ tipo });

  if (polo) {
    params.append("polo", polo);
  }

  const res = await HttpInstance.http.get<GraficoData[]>(
    `/grafico/getGrafico?${params.toString()}`
  );

  return res.data;
}

//#endregion
