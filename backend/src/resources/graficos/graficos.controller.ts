import { Request, Response } from "express";
import { faturamentoGrafico, maoDeObraGrafico } from "./graficos.services";
import { getDoisMesesAnteriores, type MesPassado } from "../../utils/ultMes";
import { Result } from "oracledb";
import { MaoDeObra, Graficos, Faturamento, Meses } from "./graficos.types";

export async function getGrafico(req: Request, res: Response): Promise<any> {
  const tipo = req.query.tipo;

  if (tipo === "Faturamento") {
    const data = new Date();
    try {
      const resultado: Result<Faturamento> | null = await faturamentoGrafico(
        data.getMonth().toString(),
        data.getFullYear().toString()
      );

      if (!resultado || !resultado.rows || resultado.rows.length === 0) {
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
