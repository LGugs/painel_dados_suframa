// tipando corretamente os modulos do echart

import type { ComposeOption } from 'echarts/core';
import type { TitleComponentOption } from 'echarts/components';
import type { TooltipComponentOption } from 'echarts/components';
import type { LegendComponentOption } from 'echarts/components';
import type { XAXisComponentOption, YAXisComponentOption } from 'echarts/components';
import type { PieSeriesOption, BarSeriesOption } from 'echarts/charts';

export type ECOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | XAXisComponentOption
  | YAXisComponentOption
  | PieSeriesOption
  | BarSeriesOption
>;