import { Request, Response } from "express";
import { fatAnualPolo } from "./faturamento.services";
import { Result } from "oracledb";
import { FaturamentoAnual } from "./faturamento.types";

async function faturamentoAnualPorPolo(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const resultado: Result<FaturamentoAnual> | null = await fatAnualPolo(
      req.params.ano
    );
    if (!resultado || !resultado.rows || resultado.rows.length === 0) {
      return res
        .status(404)
        .send({ message: "Não existe faturamento para o ano selecionado!" });
    }
    return res.status(200).json(resultado.rows);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default { faturamentoAnualPorPolo };
