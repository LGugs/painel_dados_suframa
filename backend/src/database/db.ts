import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

function initOracle() {
  const libDir = process.env.ORACLE_CLIENT_LIB_DIR;

  // Plataforma Windows
  if (process.platform === "win32") {
    if (!libDir) {
      throw new Error("ORACLE_CLIENT_LIB_DIR não definido no Windows");
    }

    oracledb.initOracleClient({ libDir });
    console.log("Oracle Client inicializado (Windows)");
    return;
  }

  // Plataformas Linux ou Mac
  if (libDir) {
    // só use se não estiver usando ldconfig
    oracledb.initOracleClient({ libDir });
    console.log("Oracle Client inicializado via libDir (Linux/Mac)");
  } else {
    console.log("Oracle Client via ldconfig/LD_LIBRARY_PATH (Linux/Mac)");
  }
}

try {
  initOracle();
} catch (e: any) {
  console.error(
    "Falha ao inicializar o Oracle Client (pode não ser necessário):",
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
