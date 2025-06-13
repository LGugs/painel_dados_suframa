import oracledb from "oracledb";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// CASO ESTEJA NO CONTAINER PARA QUE ELE RODE, SENÃO EXISTIR É QUE ESTAMOS EM DEV
const oracleClientPath = "/opt/oracle/instantclient_21_10";

if (fs.existsSync(oracleClientPath)) {
  try {
    oracledb.initOracleClient({ libDir: oracleClientPath });
    console.log("Oracle Instant Client inicializado com sucesso.");
  } catch (err) {
    console.warn("Falha ao inicializar o Oracle Client:", err);
  }
}

export async function getConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
    console.log("Conectado ao banco Oracle!");
    return connection;
  } catch (err) {
    console.error("Erro ao conectar ao banco Oracle:", err);
    throw err;
  }
}
