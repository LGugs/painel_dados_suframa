import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

export async function getConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
    console.log('Conectado ao Oracle!');
    return connection;
  } catch (err) {
    console.error('Erro ao conectar no Oracle:', err);
    throw err;
  }
}
