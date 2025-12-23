import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { MaoDeObra, Total } from "./cards.types";

//#region FATURAMENTO
// CARD - TOTAL e ULTIMO ANO
export async function faturamentoTotalCard(
  ano: string,
  polo?: string
): Promise<Result<Total> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();

  let query = `SELECT SUM(AMD2_FATURAMENTO_TOTAL) "TOTAL" 
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE amd2_ano_referencia = :ano`;

  const bindParams: Record<string, any> = { ano };

  if (polo) {
    query += " AND amd2_sset_codigo = :polo";
    bindParams.polo = polo;
  }

  // este formato:
  const result = await conn.execute<Total>(
    query, // query
    bindParams, // os parametros que desejo encaminhar
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  /* substitui este. 
  const result = await conn.execute<FaturamentoTotal>(
    `SELECT SUM(AMD2_FATURAMENTO_TOTAL) "TOTAL" 
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE amd2_ano_referencia = :ano`,
    { ano },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );*/

  conn.close();

  return result;
}

// CARD - ULTIMO MES INFORMADO
export async function faturamentoUltMesCard(
  mes: string,
  ano: string,
  polo?: string
): Promise<Result<Total> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();

  let query = `SELECT SUM(AMD2_FATURAMENTO_TOTAL) "TOTAL"
      FROM INDPORTAL.IND_MODELO_02_AGREG ima
      WHERE ima.amd2_ano_referencia = :ano AND ima.AMD2_MES_REFERENCIA = :mes`

  const bindParams: Record<string, any> = { ano, mes };

  if (polo) {
    query += " AND amd2_sset_codigo = :polo";
    bindParams.polo = polo;
  }

  const result = await conn.execute<Total>(
    query,
    bindParams,
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion

//#region MAO DE OBRA
export async function maoDeObraCards(
  mes: string,
  ano: string,
  polo?: string
): Promise<Result<MaoDeObra> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();

  let query = `SELECT SUM(ima.AMD1_QTDE_FEMININA) FEMININA,
     SUM(ima.AMD1_QTDE_PNE) PNE, 
     SUM(ima.AMD1_QTDE_TEMPORARIA) TEMPORARIA,
     SUM(ima.AMD1_QTDE_TERCEIROS) TERCEIRIZADA, 
     SUM(ima.AMD1_QTDE_TOTAL+ima.AMD1_QTDE_TEMPORARIA+ima.AMD1_QTDE_TERCEIROS) TOTAL,
     SUM(ima.AMD1_QTDE_TOTAL) TOTAL_DIRETA
     FROM INDPORTAL.IND_MODELO_01_AGREG ima
    WHERE amd1_ano_referencia = :ano AND amd1_mes_referencia = :mes`;

    const bindParams: Record<string, any> = { ano, mes };

  if (polo) {
    query += " AND amd1_sset_codigo = :polo";
    bindParams.polo = polo;
  }

  const result = await conn.execute<MaoDeObra>(
    query,
    bindParams,
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
//#region INVESTIMENTO
// CARD - TOTAL e ULTIMO ANO
export async function investimentoTotalCard(
  ano: string,
  polo?: string
): Promise<Result<Total> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();

  let query = `SELECT SUM(AMD1_INVEST_TOTAL) "TOTAL" 
      FROM INDPORTAL.IND_MODELO_01_AGREG ima
      WHERE amd1_ano_referencia = :ano`;

  const bindParams: Record<string, any> = { ano };

  if (polo) {
    query += " AND amd1_sset_codigo = :polo";
    bindParams.polo = polo;
  }

  // este formato:
  const result = await conn.execute<Total>(
    query, // query
    bindParams, // os parametros que desejo encaminhar
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

// CARD - ULTIMO MES INFORMADO
export async function investimentoUltMesCard(
  mes: string,
  ano: string,
  polo?: string
): Promise<Result<Total> | null> {
  if (ano === undefined || mes === undefined) return null; // segurança caso não passe parametros obrigatorios

  let conn: Connection;

  conn = await getConnection();

  let query = `SELECT SUM(AMD1_INVEST_TOTAL) "TOTAL"
      FROM INDPORTAL.IND_MODELO_01_AGREG ima
      WHERE ima.amd1_ano_referencia = :ano AND ima.AMD1_MES_REFERENCIA = :mes`

  const bindParams: Record<string, any> = { ano, mes };

  if (polo) {
    query += " AND amd1_sset_codigo = :polo";
    bindParams.polo = polo;
  }

  const result = await conn.execute<Total>(
    query,
    bindParams,
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion