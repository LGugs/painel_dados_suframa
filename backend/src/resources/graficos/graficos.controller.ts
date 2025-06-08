import { Request, Response } from "express";
import { maoDeObraGrafico } from "./graficos.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Graficos } from "./graficos.types";

export async function getGrafico(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo; // v1/cards/getCards?tipo=MaoDeObra ou  v1/cards/getCards?tipo=Faturamento

  // deve constar: Total, Ultimo Mes e Ano Passado no faturamento.
  if (tipo === "Faturamento") {
    return res.status(204).json("Ainda não tem endpoint para o Faturamento!");
  } else if (tipo === "Mão de Obra") {
    const mesValido: MesPassado = getDoisMesesAnteriores();

    try {
      const resultado: Result<MaoDeObra> | null = await maoDeObraGrafico(
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

      const cards: Graficos[] = [
        { name: "MASCULINA", value: dados.MASCULINA ?? 0 },
        { name: "FEMININA", value: dados.FEMININA ?? 0 },
      ];

      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(404).json("Tipo não existente!");
  }
}
