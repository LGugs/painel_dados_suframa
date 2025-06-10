export function convertNumber(valor: number): string {
  const formatter = new Intl.NumberFormat("pt-BR");
  return formatter.format(valor);
}

export function reduzirValor(value: number): string {
  if (value >= 1_000_000_000) {
    return `R$ ${(value / 1_000_000_000).toFixed(1)} B`;
  } else if (value >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toFixed(1)} M`;
  } else {
    return `R$ ${value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}
