import type { DashboardTypes } from "../../interfaces/Dashboard";
import { getCards } from "../../services/cards.service";
import { getGrafico } from "../../services/grafico.service";

export async function getDashboardData(tipo: string): Promise<DashboardTypes> {
  try {
    const [cardData, graficoData] = await Promise.all([
      getCards(tipo),
      getGrafico(tipo),
    ]);

    console.log("HELLO!! " + graficoData);

    return {
      tipo,
      cards: cardData,
      graficos: {
        type: tipo === "Faturamento" ? "bar" : "doughnut",
        data: graficoData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      tipo,
      cards: [],
      graficos: {
        type: "bar",
        title: "Erro ao carregar",
        data: [],
      },
    };
  }
}

/*
  switch (tipo) {
    case "Mão de Obra":
      return {
        tipo: "Mão de Obra",
        cards: [
          {
            titulo: "Total",
            valor: 110085,
          },
          {
            titulo: "Feminina",
            valor: 35505,
          },
          {
            titulo: "PNE",
            valor: 3854,
          },
        ],
        graficos: {
          type: "doughnut",
          data: [
            { name: "Masculina", value: 70726 },
            { name: "Feminina", value: 35505 },
          ],
        },
      };

    case "Faturamento":
      return {
        tipo: "Faturamento",
        cards: [
          {
            titulo: "Total",
            valor: 110085,
          },
          {
            titulo: "Mês Informado",
            valor: 35505,
          },
          {
            titulo: "Ano Passado (2024)",
            valor: 3854,
          },
        ],
        graficos: {
          type: "bar",
          data: [
            { name: "Janeiro", value: Math.random() },
            { name: "Fevereiro", value: Math.random() },
            { name: "Março", value: Math.random() },
            { name: "Abril", value: Math.random() },
            {
              name: "Abril",
              value: Math.random(),
              itemStyle: { color: "#ff0000" },
            },
            { name: "Junho", value: Math.random() },
            { name: "Julho", value: Math.random() },
            { name: "Agosto", value: Math.random() },
            { name: "Setembro", value: Math.random() },
            { name: "Outubro", value: Math.random() },
            { name: "Novembro", value: Math.random() },
            { name: "Dezembro", value: Math.random() },
          ],
        },
      };
    default:
      return {
        tipo: "Tipo não definido",
        cards: [],
        graficos: {
          title: "Sem dados!",
          type: "bar",
          data: [],
        },
      };
  }
}
*/
