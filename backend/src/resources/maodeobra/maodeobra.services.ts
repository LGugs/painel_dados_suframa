import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { MaoDeObra, MaoDeObraAcu } from "./maodeobra.types";
import { getMesPassado } from "../../utils/ultMes";

//#region MAO DE OBRA ANUAL/MENSAL POR POLO
export async function maoObraAnualMesPolo(
  ano: string | undefined,
  mes: string | undefined
): Promise<Result<MaoDeObra> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros obrigatorios
  let mesOpt: string = mes === undefined ? getMesPassado() : mes; // sempre pegará o ultimo mes caso não seja solicitado o mesmo

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<MaoDeObra>(
    `SELECT
      csb.sset_descricao AS polo,
      SUM(T2.vmd1_qtde_feminina) Feminino,
      SUM(T2.vmd1_qtde_pne) PNE,
      SUM(T2.vmd1_emps_1_dia_mes) Total
    FROM
    INDPORTAL.IND_ISE_VALID T1
    JOIN INDPORTAL.IND_MODELO_01_VALID T2 ON T1.VISE_ID = T2.VISE_ID
    JOIN pss.csuf_subsetor_emp@psspub cse ON cse.inscsuf = T1.VISE_INSC_SUFRAMA AND cse.set_cd = 19
    JOIN pss.csuf_subsetor@psspub csb ON cse.set_cd = csb.set_cd AND cse.sset_cd = csb.sset_cd
      WHERE T1.VISE_ANO_REFERENCIA = :ano AND T1.VISE_MES_REFERENCIA = :mes
      GROUP BY csb.sset_descricao
      ORDER BY csb.sset_descricao`,
    { ano, mes: mesOpt },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion

//#region MAO DE OBRA ANUAL/MENSAL ACUMULADO
export async function maoObraAnualMesAcumulado(
  ano: string,
  mes: string | undefined
): Promise<Result<MaoDeObraAcu> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros obrigatorios
  let mesOpt: string = mes === undefined ? getMesPassado() : mes; // sempre pegará o ultimo mes caso não seja solicitado o mesmo

  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<MaoDeObraAcu>(
    `SELECT
      SUM(T2.vmd1_qtde_feminina) Feminino,
      SUM(T2.vmd1_qtde_pne) PNE,
      SUM(T2.vmd1_emps_1_dia_mes) Total
    FROM
    INDPORTAL.IND_ISE_VALID T1
    JOIN INDPORTAL.IND_MODELO_01_VALID T2 ON T1.VISE_ID = T2.VISE_ID
    JOIN pss.csuf_subsetor_emp@psspub cse ON cse.inscsuf = T1.VISE_INSC_SUFRAMA AND cse.set_cd = 19
    JOIN pss.csuf_subsetor@psspub csb ON cse.set_cd = csb.set_cd AND cse.sset_cd = csb.sset_cd
      WHERE T1.VISE_ANO_REFERENCIA = :ano AND T1.VISE_MES_REFERENCIA = :mes`,
    { ano, mes: mesOpt },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
