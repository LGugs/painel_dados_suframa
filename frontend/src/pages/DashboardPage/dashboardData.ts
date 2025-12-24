import type { DashboardTypes } from "../../interfaces/Dashboard";
import { getCards } from "../../services/cards.service";
import { getGrafico } from "../../services/grafico.service";
import type { TipoDado } from "../../interfaces/Dados";

export async function getDashboardData(
  tipo: TipoDado,
  polo: string
): Promise<DashboardTypes> {
  try {
    const [cardData, graficoData] = await Promise.all([
      getCards(tipo, polo),
      getGrafico(tipo, polo),
    ]);

    // Só para retornar os valores com R$
    const cardsComTipo = cardData.map((card) => ({
      ...card,
      tipo,
    }));

    return {
      tipo,
      cards: cardsComTipo,
      graficos: {
        type:
          tipo === "Faturamento" || tipo === "Investimento"
            ? "line"
            : "doughnut",
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
