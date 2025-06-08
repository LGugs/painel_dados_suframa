import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { MaoDeObra } from "./graficos.types";

//#region GRAFICO - MÃO DE OBRA
export async function maoDeObraGrafico(
  mes: string,
  ano: string
): Promise<Result<MaoDeObra> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<MaoDeObra>(
    `SELECT (SUM(ima.AMD1_QTDE_TOTAL)-SUM(ima.AMD1_QTDE_FEMININA)) Masculina, SUM(ima.AMD1_QTDE_FEMININA) Feminina
     FROM INDPORTAL.IND_MODELO_01_AGREG ima
    WHERE amd1_ano_referencia = :ano AND amd1_mes_referencia = :mes`,
    { ano, mes },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
