import oracledb, { Connection, Result } from "oracledb";
import { getConnection } from "../../database/db";
import { FaturamentoAnual } from "./faturamento.types";

//#region FATURAMENTO ANUAL POR POLO
export async function fatAnualPolo(
  ano: string | undefined
): Promise<Result<FaturamentoAnual> | null> {
  if (ano === undefined) return null; // segurança caso não passe parametros.
  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute<FaturamentoAnual>(
    `SELECT csb.sset_descricao as polo,
      SUM(id.daprd_fatloc + id.daprd_fatnac + id.daprd_fatext) as fat_total
    FROM indportal.ind_dadosprod id
    JOIN pss.csuf_subsetor_emp@psspub cse ON cse.inscsuf =  id.EMP_INSCSUF AND cse.set_cd = 19
    JOIN pss.csuf_subsetor@psspub csb ON cse.set_cd = csb.set_cd AND cse.sset_cd = csb.sset_cd
    WHERE id.daprd_ano = :ano
      GROUP BY csb.sset_descricao
      ORDER BY csb.sset_descricao`,
    { ano },
    { outFormat: oracledb.OUT_FORMAT_OBJECT } // evitar injection
  );

  conn.close();

  return result;
}

//#endregion
