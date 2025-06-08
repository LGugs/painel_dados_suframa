import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { MaoDeObra, FaturamentoTotal } from "./cards.types";

//#region FATURAMENTO
// CARD - TOTAL e ULTIMO ANO
export async function faturamentoTotalCard(
  ano: string
): Promise<Result<FaturamentoTotal> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<FaturamentoTotal>(
    `SELECT SUM(AMD2_FATURAMENTO_TOTAL) "TOTAL" 
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE amd2_ano_referencia = :ano`,
    { ano },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

// CARD - ULTIMO MES INFORMADO
export async function faturamentoUltMesCard(
  mes: string,
  ano: string
): Promise<Result<FaturamentoTotal> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<FaturamentoTotal>(
    `SELECT SUM(AMD2_FATURAMENTO_TOTAL) "TOTAL"
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE ima.amd2_ano_referencia = :ano AND ima.AMD2_MES_REFERENCIA = :mes`,
    { ano, mes },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion

//#region MAO DE OBRA
export async function maoDeObraCards(
  mes: string,
  ano: string
): Promise<Result<MaoDeObra> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<MaoDeObra>(
    `SELECT SUM(ima.AMD1_QTDE_TOTAL) TOTAL, SUM(ima.AMD1_QTDE_FEMININA) Feminina, SUM(ima.AMD1_QTDE_PNE) PNE
     FROM INDPORTAL.IND_MODELO_01_AGREG ima
    WHERE amd1_ano_referencia = :ano AND amd1_mes_referencia = :mes`,
    { ano, mes },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
