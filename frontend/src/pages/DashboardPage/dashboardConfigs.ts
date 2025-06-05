import type { DashboardTypes } from "../../interfaces/Dashboard";

export function getDashboardConfig(tipo: string): DashboardTypes {
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
      };
      
    /*case "Faturamento":
      return {
        tipo: "Faturamento",
        cards: [
          { label: "Produtos", value: "120" },
          { label: "Fora de Estoque", value: "8" },
        ],
        charts: [
          { type: "pie", data: {...}, options: {...} },
        ],
      };*/
    default:
      return {
        tipo: "Dashboard",
        cards: [],
        //charts: [],
      };
  }
}