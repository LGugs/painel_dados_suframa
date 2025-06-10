import type { DashboardTypes } from "../../interfaces/Dashboard";
import { getCards } from "../../services/cards.service";
import { getGrafico } from "../../services/grafico.service";

export async function getDashboardData(tipo: string, polo: string): Promise<DashboardTypes> {
  try {
    const [cardData, graficoData] = await Promise.all([
      getCards(tipo, polo),
      getGrafico(tipo, polo),
    ]);

    //console.log("HELLO!! " + graficoData);

    // Só para retornar os valores com R$
    const cardsComTipo = cardData.map((card) => ({
      ...card,
      tipo,
    }));

    return {
      tipo,
      cards: cardsComTipo,
      graficos: {
        type: tipo === "Faturamento" ? "line" : "doughnut",
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
        title: "Polo selecionado não possui dados para exibir!",
        data: [],
      },
    };
  }
}
