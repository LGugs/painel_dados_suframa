import { Request, Response } from "express";
import {
  maoObraAnualMesAcumulado,
  maoObraAnualMesPolo,
} from "./maodeobra.services";
import { Result } from "oracledb";
import { MaoDeObra, MaoDeObraAcu } from "./maodeobra.types";

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

async function maoDeObraAcuAnoMes(req: Request, res: Response): Promise<any> {
  try {
    const resultado: Result<MaoDeObraAcu> | null =
      await maoObraAnualMesAcumulado(req.params.ano, req.params.mes);
    if (!resultado || !resultado.rows || resultado.rows.length === 0) {
      return res.status(404).send({
        message:
          "Não existe mão de obra cadastrada para o ano/mês selecionado!",
      });
    }

    const dados = resultado.rows[0]; // sempre terá apenas uma linha

    const cards = [
      { titulo: "Feminina", valor: dados.FEMININO ?? 0 },
      { titulo: "PNE", valor: dados.PNE ?? 0 },
      { titulo: "Total", valor: dados.TOTAL ?? 0 },
    ];

    return res.status(200).json(cards);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default { maoDeObraPoloAnoMes, maoDeObraAcuAnoMes };
