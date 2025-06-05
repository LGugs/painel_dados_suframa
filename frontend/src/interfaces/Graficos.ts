export interface GraficoProps {
  type: 'bar' | 'pie' | 'doughnut';
  title?: string;
  data: { name: string; value: number; itemStyle?: { color: string } }[];
}