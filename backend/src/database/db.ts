import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

function initOracle() {
  const libDir = process.env.ORACLE_CLIENT_LIB_DIR;
  const runningInDocker = process.env.RUNNING_IN_DOCKER === "true";

  // Plataforma Windows
  if (process.platform === "win32" && !runningInDocker) {
    if (!libDir) {
      throw new Error("ORACLE_CLIENT_LIB_DIR não definido no Windows");
    }

    oracledb.initOracleClient({ libDir });
    console.log("Oracle Client inicializado (Windows)");
    return;
  }

  // Plataformas Linux/Docker
  if (!runningInDocker && libDir) {
    // só use se não estiver usando ldconfig
    oracledb.initOracleClient({ libDir });
    console.log("Oracle Client inicializado via libDir (Linux)");
  } else {
    console.log("Oracle Client via ldconfig (Linux/Docker)");
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
