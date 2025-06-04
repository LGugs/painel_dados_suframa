export default function convertNumber(valor:number):number{
    const formatter = new Intl.NumberFormat('pt-BR');
    return formatter.format(valor);
}