import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

function initOracle() {
  const libDir = process.env.ORACLE_CLIENT_LIB_DIR;

  try {
    if (process.platform === "win32") {
      if (!libDir) {
        throw new Error("ORACLE_CLIENT_LIB_DIR não definido no Windows");
      }

      oracledb.initOracleClient({ libDir }); // para iniciar o Oracle Client no Windows em modo Thick, pois o Thin é o padrão e o mesmo não reconhece senhas complexas
      console.log("Oracle Client inicializado (Windows)");
    } else {
      // Linux / Docker → usa ldconfig
      oracledb.initOracleClient();
      console.log("Oracle Client inicializado (Linux/Docker - ldconfig)");
    }

    console.log("Oracle Thick mode:", oracledb.thin === false);
  } catch (err: any) {
    console.error("Falha ao inicializar Oracle Client:", err.message);
    throw err;
  }
}

try {
  initOracle();
} catch (e: any) {
  console.error(
    "Falha ao inicializar o Oracle Client:",
    e.message
  );
  throw e;
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
