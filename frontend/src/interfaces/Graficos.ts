export interface GraficoData {
  name: string;
  value: number;
  itemStyle?: { color: string };
}

export interface GraficoProps {
  type: "bar" | "line" | "doughnut";
  title?: string;
  data: GraficoData[];
}
