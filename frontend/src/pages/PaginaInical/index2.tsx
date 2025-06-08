import { useEffect, useState } from "react";
import { getMaoDeObraCards } from "../../services/cards.service";
import type { MaoDeObra } from "../../interfaces/MaoDeObra";
import type { MesPassado } from "../../interfaces/MesPassado";
import { getAnoMes, convertMesToDesc } from "../../utils/getAnoMes";
//import { useParams } from 'react-router-dom';

export default function PaginaInicial() {
  const [maoDeObraData, setMaoDeObraData] = useState<MaoDeObra[]>();
  //const [testeValor, setTesteValor] = useState<number>(0);
  const [mesPassado] = useState<MesPassado>(getAnoMes()); // sempre teremos valor do mes passado

  useEffect(() => {
    (async () => {
      try {
        const res = await getMaoDeObraCards(mesPassado.ano, "4"); // teste
        const dados = res?.data;
        setMaoDeObraData(dados);
        console.log(dados);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [mesPassado]);

  return (
    <>
      <div>
        <h1>
          {convertMesToDesc("4")}/{mesPassado.ano}
        </h1>
        {maoDeObraData?.map((item: MaoDeObra, index: number) => (
          <div key={index}>
            <p>Polo: {item.POLO}</p>
            <p>Masculino: {item.MASCULINO}</p>
            <p>Feminino: {item.FEMININO}</p>
            <p>PNE: {item.PNE}</p>
            <p>Total: {item.TOTAL}</p>
          </div>
        ))}
      </div>
    </>
  );
}
