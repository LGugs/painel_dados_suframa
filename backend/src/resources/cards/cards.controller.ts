import { Request, Response } from "express";
import {
  maoDeObraCards,
  faturamentoTotalCard,
  faturamentoUltMesCard,
} from "./cards.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Cards } from "./cards.types";

async function getMaoDeObraCards(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo;
  const mesValido: MesPassado = getDoisMesesAnteriores();
  const ano = new Date().getFullYear();
  const anoPassado = ano - 1;

  // deve constar: Total, Ultimo Mes e Ano Passado no faturamento.
  if (tipo === "Faturamento") {
    try {
      const [totalAnual, totalUltMes, totalAnoAnt] = await Promise.all([
        faturamentoTotalCard(ano.toString()),
        faturamentoUltMesCard(mesValido.mes, mesValido.ano),
        faturamentoTotalCard(anoPassado.toString()),
      ]);

      if (
        !totalAnual ||
        !totalAnual.rows ||
        totalAnual.rows.length === 0 ||
        !totalUltMes ||
        !totalUltMes.rows ||
        totalUltMes.rows.length === 0 ||
        !totalAnoAnt ||
        !totalAnoAnt.rows ||
        totalAnoAnt.rows.length === 0
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
        { titulo: "TOTAL", valor: totalAno.TOTAL ?? 0 },
        { titulo: "MÊS INFORMADO", valor: totalMes.TOTAL ?? 0 },
        {
          titulo: "ANO PASSADO " + anoPassado,
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
        mesValido.ano
      );

      if (!resultado || !resultado.rows || resultado.rows.length === 0) {
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
      ];

      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(404).json("Tipo não existente!");
  }
}

export { getMaoDeObraCards };
