import { useEffect, useState } from "react";
import { getMaoDeObra } from "../../services/maodeobra.service";
import type { MaoDeObra } from "../../interfaces/GetMaoDeObra";
import type { MesPassado } from "../../interfaces/MesPassado";
import getAnoMes from "../../utils/getAnoMes";
//import { useParams } from 'react-router-dom';

export default function PaginaInicial() {
  const [maoDeObraData, setMaoDeObraData] = useState<MaoDeObra[]>();
  const [testeValor, setTesteValor] = useState<number>(0);
  const [mesPassado] = useState<MesPassado>(getAnoMes()); // sempre teremos valor do mes passado

  useEffect(() => {
    (async () => {
      try {
        const res = await getMaoDeObra(mesPassado.ano, "4"); // teste
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
          {mesPassado.mes}/{mesPassado.ano}
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
