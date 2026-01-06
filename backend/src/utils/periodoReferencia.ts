export default function getPeriodoReferencia() {
  const hoje = new Date();
  let mes = hoje.getMonth() + 1;
  let ano = hoje.getFullYear();

  if (mes === 1) {
    mes = 12;
    ano -= 1;
  }

  return { mes, ano };
}