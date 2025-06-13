import oracledb from "oracledb";
import dotenv from "dotenv";


dotenv.config();

// CASO ESTEJA NO CONTAINER PARA QUE ELE RODE, SENÃO EXISTIR É QUE ESTAMOS EM DEV
console.log("LD_LIBRARY_PATH:", process.env.LD_LIBRARY_PATH);
console.log("oracledb.oracleClientVersion:", oracledb.oracleClientVersion);

try {
  oracledb.initOracleClient({ libDir: process.env.LD_LIBRARY_PATH });
  console.log("Oracle Instant Client carregado com sucesso");
} catch (e) {
  console.warn("Falha ao inicializar o Oracle Client (pode não ser necessário):", e);
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
