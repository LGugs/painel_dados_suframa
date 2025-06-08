import { Request, Response } from "express";
import { maoDeObraCards, maoObraAnualMesPolo } from "./cards.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Cards, CardQuery } from "./cards.types";

async function getCards(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo; // v1/cards/getCards?tipo=MaoDeObra ou  v1/cards/getCards?tipo=Faturamento

  // deve constar: Total, Ultimo Mes e Ano Passado no faturamento.
  if (tipo === "Faturamento") {
    return res.status(204).json("Ainda não tem endpoint para o Faturamento!");
  } else if (tipo === "Mão de Obra") {
    const mesValido: MesPassado = getDoisMesesAnteriores();

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
        { titulo: "FEMININO", valor: dados.FEMININO ?? 0 },
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

async function maoDeObraPoloAnoMes(req: Request, res: Response): Promise<any> {
  try {
    const resultado: Result<MaoDeObra> | null = await maoObraAnualMesPolo(
      req.params.ano,
      req.params.mes
    );
    if (!resultado || !resultado.rows || resultado.rows.length === 0) {
      return res.status(404).send({
        message:
          "Não existe mão de obra cadastrada para o ano/mês selecionado!",
      });
    }
    return res.status(200).json(resultado.rows);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export { maoDeObraPoloAnoMes, getCards };
