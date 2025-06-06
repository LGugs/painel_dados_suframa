import { type CardProps } from "./Cards";
import { type GraficoProps } from "./Graficos";

export interface DashboardTypes {
  tipo: string;
  ano?: number;
  polo?: string;
  cards: CardProps[];
  graficos?: GraficoProps;
}
