import { type CardProps } from "./Cards";
import { type GraficoProps } from "./Graficos";

export interface DashboardTypes {
  tipo: string;
  cards: CardProps[];
  graficos?: GraficoProps;
}