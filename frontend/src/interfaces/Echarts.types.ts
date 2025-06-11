import type { ComposeOption } from "echarts/core";
import type {
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  GridComponentOption,
} from "echarts/components";
import type {
  LineSeriesOption,
  PieSeriesOption,
  BarSeriesOption,
} from "echarts/charts";

export type ECOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GridComponentOption
  | LineSeriesOption
  | PieSeriesOption
  | BarSeriesOption
>;