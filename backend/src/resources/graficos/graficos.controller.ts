import { Request, Response } from "express";
import { faturamentoGrafico, investimentoGrafico, maoDeObraGrafico } from "./graficos.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Graficos, Periodo, Meses } from "./graficos.types";
import { todosOsValoresSaoZeros } from "../../utils/validacoes";
import getPeriodoReferencia from "../../utils/periodoReferencia";

export async function getGrafico(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo;
  const polo = req.query.polo as string | undefined;

  const { mes: mesConsulta, ano: anoConsulta } = getPeriodoReferencia();

  if (tipo === "Faturamento") {  
    try {
      const resultado: Result<Periodo> | null = await faturamentoGrafico(
        mesConsulta.toString(),
        anoConsulta.toString(),
        polo
      );

      if (!resultado || !resultado.rows?.length) {
        return res.status(404).send({
          message:
            "Não existe faturamento cadastrado para o ano/mês selecionado!",
        });
      }

      const dados = resultado.rows;

      // aqui converto para descrição dos meses
      const graficoData: Graficos[] = dados.map((item) => ({
        name: Meses[item.MES - 1] ?? `Mês ${item.MES}`,
        value: item.TOTAL ?? 0,
      }));

      return res.status(200).json(graficoData);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (tipo === "Mão de Obra") {
    const mesValido: MesPassado = getDoisMesesAnteriores();
    try {
      const resultado: Result<MaoDeObra> | null = await maoDeObraGrafico(
        mesValido.mes,
        mesValido.ano,
        polo
      );
      
      if (!resultado || !resultado.rows?.length) {
        return res.status(404).send({
          message:
            "Não existe mão de obra cadastrada para o ano/mês selecionado!",
        });
      }

      const dados = resultado.rows[0]; // sempre terá apenas uma linha

      // caso sejam valores zerados, retorno 404 e os graficos não exibem.
      if (todosOsValoresSaoZeros([
        dados.TOTAL_DIRETA,
        dados.TEMPORARIA,
        dados.TERCEIRIZADA
      ])) {
        return res.status(404).send({
          message: "Não existe mão de obra cadastrada para o ano/mês selecionado!",
        });
      }

      const cards: Graficos[] = [
        { name: "DIRETA", value: dados.TOTAL_DIRETA },
        { name: "TEMPORÁRIA", value: dados.TEMPORARIA },
        { name: "TERCEIRIZADA", value: dados.TERCEIRIZADA },
      ];

      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (tipo === "Investimento") {
    
    try {
      const resultado: Result<Periodo> | null = await investimentoGrafico(
        mesConsulta.toString(),
        anoConsulta.toString(),
        polo
      );

      if (!resultado || !resultado.rows?.length) {
        return res.status(404).send({
          message:
            "Não existe investimento cadastrado para o ano/mês selecionado!",
        });
      }

      const dados = resultado.rows;

      // aqui converto para descrição dos meses
      const graficoData: Graficos[] = dados.map((item) => ({
        name: Meses[item.MES - 1] ?? `Mês ${item.MES}`,
        value: item.TOTAL ?? 0,
      }));

      return res.status(200).json(graficoData);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(404).json("Tipo não existente!");
  }
}
