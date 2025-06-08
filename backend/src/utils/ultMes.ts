export interface MesPassado {
  mes: string;
  ano: string;
}

export function getDoisMesesAnteriores(): MesPassado {
  const hoje = new Date();
  const dataAjustada = new Date(hoje.getFullYear(), hoje.getMonth() - 2, 1);

  const mes = (dataAjustada.getMonth() + 1).toString();
  const ano = dataAjustada.getFullYear().toString();

  return { mes, ano };
}
