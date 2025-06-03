import type { MesPassado } from "../interfaces/MesPassado";

// retorna o mes passado, incluindo se a data atual for do mes de Janeiro. Ele retornará Dezembro/Ano Atual -1
export function getAnoMes(): MesPassado {
  const dataAtual = new Date();
  const mesPassado = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth() - 1
  );

  const ano = mesPassado.getFullYear().toString();
  const mes = (mesPassado.getMonth() + 1).toString();

  return { ano, mes };
}

export function convertMesToDesc(mes: string): string {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const mesNumero = parseInt(mes, 10);

  if (mesNumero >= 1 && mesNumero <= 12) {
    return meses[mesNumero - 1]; // Subtrai 1 porque o índice do array começa em 0
  } else {
    throw new Error("Número do mês inválido. Deve ser entre 1 e 12.");
  }
}
