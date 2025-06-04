export function getDashboardConfig(tipo: string) {
  switch (tipo) {
    case "financeiro":
      return {
        title: "Dashboard Financeiro",
        cards: [
          { label: "Receita", value: "R$ 25.000" },
          { label: "Despesas", value: "R$ 18.000" },
          { label: "Lucro", value: "R$ 7.000" },
        ],
        charts: [
          { type: "bar", data: {/*...*/}, options: {/*...*/} },
        ],
      };
    case "estoque":
      return {
        title: "Dashboard de Estoque",
        cards: [
          { label: "Produtos", value: "120" },
          { label: "Fora de Estoque", value: "8" },
        ],
        charts: [
          { type: "pie", data: {/*...*/}, options: {/*...*/} },
        ],
      };
    default:
      return {
        title: "Dashboard",
        cards: [],
        charts: [],
      };
  }
}