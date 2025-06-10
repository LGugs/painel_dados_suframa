export function todosOsValoresSaoZeros(valores: (number | null | undefined)[]): boolean {
  return valores.every((v) => !v || v === 0);
}