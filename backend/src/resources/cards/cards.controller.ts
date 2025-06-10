import { Request, Response } from "express";
import {
  maoDeObraCards,
  faturamentoTotalCard,
  faturamentoUltMesCard,
} from "./cards.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Cards } from "./cards.types";

async function getCards(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo;
  const polo = req.query.polo as string | undefined; // opcional
  const mesValido: MesPassado = getDoisMesesAnteriores();
  const ano = new Date().getFullYear();
  const anoPassado = ano - 1;

  // deve constar: Total, Ultimo Mes e Ano Passado no faturamento.
  if (tipo === "Faturamento") {
    try {
      const [totalAnual, totalUltMes, totalAnoAnt] = await Promise.all([
        faturamentoTotalCard(ano.toString(), polo),
        faturamentoUltMesCard(mesValido.mes, mesValido.ano, polo),
        faturamentoTotalCard(anoPassado.toString(), polo),
      ]);

      // rows? é para não dar erros com undefined
      if (
        !totalAnual || !totalAnual.rows?.length ||
        !totalUltMes || !totalUltMes.rows?.length ||
        !totalAnoAnt || !totalAnoAnt.rows?.length
      ) {
        return res.status(404).send({
          message:
            "Não existe faturamento cadastrado para o ano/mês selecionado!",
        });
      }

      const totalAno = totalAnual.rows[0]; // sempre terá apenas uma linha
      const totalMes = totalUltMes.rows[0];
      const totalAnoPassado = totalAnoAnt.rows[0];

      const cards: Cards[] = [
        { titulo: "TOTAL DO ANO ATUAL", valor: totalAno.TOTAL ?? 0 },
        { titulo: "ULT. MÊS INFORMADO", valor: totalMes.TOTAL ?? 0 },
        {
          titulo: "ANO PASSADO (" + anoPassado + ")",
          valor: totalAnoPassado.TOTAL ?? 0,
        },
      ];

      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (tipo === "Mão de Obra") {
    try {
      const resultado: Result<MaoDeObra> | null = await maoDeObraCards(
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

      const cards: Cards[] = [
        { titulo: "TOTAL", valor: dados.TOTAL ?? 0 },
        { titulo: "FEMININA", valor: dados.FEMININA ?? 0 },
        { titulo: "PNE", valor: dados.PNE ?? 0 },
        { titulo: "DIRETA", valor: dados.TOTAL_DIRETA ?? 0 },
        { titulo: "TEMPORÁRIA", valor: dados.TEMPORARIA ?? 0 },
        { titulo: "TERCEIRIZADA", valor: dados.TERCEIRIZADA ?? 0 },
      ];

      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(404).json("Tipo não existente!");
  }
}

export { getCards };
