import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { MaoDeObra, Faturamento } from "./graficos.types";

//#region GRAFICO - FATURAMENTO
export async function faturamentoGrafico(
  mes: string,
  ano: string
): Promise<Result<Faturamento> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<Faturamento>(
    `SELECT ima.AMD2_MES_REFERENCIA MES, SUM(AMD2_FATURAMENTO_TOTAL) TOTAL
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE ima.amd2_ano_referencia = :ano AND ima.AMD2_MES_REFERENCIA <= :mes
		  GROUP BY ima.AMD2_MES_REFERENCIA`,
    { ano, mes },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion

//#region GRAFICO - MÃO DE OBRA
export async function maoDeObraGrafico(
  mes: string,
  ano: string
): Promise<Result<MaoDeObra> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<MaoDeObra>(
    `SELECT SUM(ima.AMD1_QTDE_TOTAL) TOTAL_DIRETA,
      SUM(ima.AMD1_QTDE_PNE) PNE, SUM(ima.AMD1_QTDE_TEMPORARIA) TEMPORARIA,
      SUM(ima.AMD1_QTDE_TERCEIROS) TERCEIRIZADA
      FROM INDPORTAL.IND_MODELO_01_AGREG ima
      WHERE amd1_ano_referencia = :ano AND amd1_mes_referencia = :mes`,
    { ano, mes },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
