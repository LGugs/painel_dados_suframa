export function getMesPassado(): string {
  const dataAtual = new Date();
  const mesPassado = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth() - 1
  );
  const numeroMes = mesPassado.getMonth() + 1; // lembrando que 0 é Janeiro e 11 é Dezembro. Por isso o +1
  return numeroMes.toString();
}
