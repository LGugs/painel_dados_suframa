import type { MesPassado } from "../interfaces/MesPassado";

// retorna o mes passado, incluindo se a data atual for do mes de Janeiro. Ele retornará Dezembro/Ano Atual -1
export default function getAnoMes(): MesPassado {
  const dataAtual = new Date();
  const mesPassado = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth() - 1
  );

  const ano = mesPassado.getFullYear().toString();
  const mes = (mesPassado.getMonth() + 1).toString();

  return { ano, mes };
}
