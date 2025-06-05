import { type GraficoProps } from '../../interfaces/Graficos';
import { useEffect, useMemo, useRef } from 'react';
import { useColorScheme } from '@mui/material/styles';
import { type ECOption } from '../../interfaces/Echarts.types';
import * as echarts from 'echarts';

export default function Grafico({ type, title, data }: GraficoProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const { mode, systemMode  } = useColorScheme();
  const resolvedMode = mode === 'system' ? systemMode : mode;

  const getEchartsTheme = () => {
      switch (resolvedMode) {
        case 'dark':
          return 'dark';
        case 'light':
          return 'light';
        default:
          return undefined;
      }
    };

  const getOption: ECOption = useMemo(() => {
    const textColor = resolvedMode === 'dark' ? '#fff' : '#000';

    switch (type) {
      case 'pie':
      case 'doughnut':
        return {
          title: {
            text: title,
            left: 'center',
            textStyle: { color: textColor },
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            bottom: 10,
            left: 'center',
            textStyle: { color: textColor },
          },
          series: [
            {
              label: {
                show: false
              },
              name: title,
              type: 'pie',
              radius: type === 'doughnut' ? ['40%', '70%'] : '60%',
              data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        };
      case 'bar':
      default:
        return {
          title: {
            text: title,
            textStyle: { color: textColor },
          },
          xAxis: {
            type: 'category',
            data: data.map((d) => (d.name)),
            textStyle: { color: textColor },
          },
          yAxis: {
            type: 'value',
            textStyle: { color: textColor },
          },
          legend: {
            textStyle: { color: textColor },
          },
          series: [
            {
              data: data.map((d) => ({
                value: d.value,
                itemStyle: d.itemStyle
              })),
              type: 'bar',
            },
          ],
        };
    }
  }, [type, title, data, resolvedMode]);

  useEffect(() => {
    if (!chartRef.current) return;

    const theme = getEchartsTheme();

    let chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      chart.dispose(); // Força a re-renderização com o novo tema
    }

    chart = echarts.init(chartRef.current, theme);
    chart.setOption(getOption);

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [getOption, resolvedMode]);

  return <div ref={chartRef} style={{ width: '100%', height: 300 }} />;
}
