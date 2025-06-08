import { HttpInstance } from "../utils/http";
import type { GraficoData } from "../interfaces/Graficos";

//#region MAO DE OBRA - GRAFICO
export async function getGrafico(tipo: string): Promise<GraficoData[]> {
  const res = await HttpInstance.http.get<GraficoData[]>(
    `/grafico/getGrafico?tipo=${encodeURIComponent(tipo)}` // para passar strings com espaços vazios para o backend
  );

  console.log(res.data);

  return res.data;
}

//#endregion
