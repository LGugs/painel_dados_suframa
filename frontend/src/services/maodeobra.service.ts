import { HttpInstance } from "../utils/http";
import type { MaoDeObra } from "../interfaces/GetMaoDeObra";

// ========================= Dashboard Geral - Sem período ====================== //

// ================== Cards ================== //

// Mão de Obra
export async function getMaoDeObra(
  ano: string,
  mes: string
): Promise<MaoDeObra | null> {
  return await HttpInstance.http.get(
    `/maodeobra/maoDeObraPoloMes/${ano}/mes/${mes}`
  );
}
