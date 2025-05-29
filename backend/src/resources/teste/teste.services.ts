import { Connection } from "oracledb";
import { getConnection } from "../../database/db";

export async function queryTeste() {
  let conn: Connection;

  conn = await getConnection();
  const result = await conn.execute(
    `SELECT * FROM suframa.PRJ_TIPO_PROD ptp WHERE prdsf_codigo = '1206'`
  );

  conn.close();

  return result;
}
