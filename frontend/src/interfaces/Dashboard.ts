import { type CardProps } from "./Cards";
import type { TipoDado } from "./Dados";
import { type GraficoProps } from "./Graficos";

export interface DashboardTypes {
  tipo: TipoDado; // tipo do Dashboard. Pode ser Faturamento, Mão de Obra ou Investimento. Terá mais no futuro provavelmente.
  ano?: number; // por padrão é o ano atual.
  polo?: string; // por padrão é acumulado
  cards?: CardProps[]; // os cards sempre terão titulo e valor. Independente do tipo do Dashboard
  graficos?: GraficoProps; // o tipo do Dashboard determina o tipo do grafico
}
