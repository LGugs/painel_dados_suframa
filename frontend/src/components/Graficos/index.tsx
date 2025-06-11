import { type GraficoProps } from "../../interfaces/Graficos";
import { useEffect, useMemo, useRef } from "react";
import { useColorScheme } from "@mui/material/styles";
import { type ECOption } from "../../interfaces/Echarts.types";
import * as echarts from "echarts";
import { convertNumber, reduzirValor } from "../../utils/money";

export default function Grafico({ type, title, data }: GraficoProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const { mode, systemMode } = useColorScheme();
  const resolvedMode = mode === "system" ? systemMode : mode;

  const getOption = useMemo<ECOption>(() => {
    const textColor = resolvedMode === "dark" ? "#fff" : "#000";
    const backgroundColor = "transparent";

    switch (type) {
      case "line":
        return {
          backgroundColor,
          grid: {
            left: 100, // espaço para os labels do eixo Y
            right: 60,
            top: 40,
            bottom: 40,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.map((item) => item.name),
          },
          yAxis: {
            type: "value",
            axisLabel: {
              color: textColor,
              formatter: reduzirValor,
            },
          },
          title: {
            text: title,
            left: "center",
            textStyle: { color: textColor },
          },
          tooltip: {
            trigger: "item",
            formatter: (params: any) => reduzirValor(params.value),
          },
          legend: {
            bottom: 10,
            left: "center",
            textStyle: { color: textColor },
          },
          series: [
            {
              name: title,
              type: "line",
              smooth: false,
              data: data.map((item) => item.value),
              label: {
                show: true,
                position: "top",
                color: textColor,
                formatter: (params: any) => reduzirValor(params.value),
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
      case "doughnut":
        return {
          backgroundColor,
          title: {
            text: title,
            left: "center",
            textStyle: { color: textColor },
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            bottom: 10,
            left: "center",
            textStyle: { color: textColor },
          },
          series: [
            {
              label: {
                show: true,
                color: textColor,
                formatter: (params: any) => convertNumber(params.value),
              },
              name: title,
              type: "pie",
              radius: type === "doughnut" ? ["40%", "70%"] : "60%",
              data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
      case "bar":
      default:
        return {
          backgroundColor,
          title: {
            text: title,
            left: "center",
            textStyle: { color: textColor },
          },
          xAxis: {
            type: "category",
            data: data.map((d) => d.name),
            axisLabel: { color: textColor },
          },
          yAxis: {
            type: "value",
            axisLabel: { color: textColor },
          },
          legend: {
            textStyle: { color: textColor },
          },
          series: [
            {
              data: data.map((d) => ({
                value: d.value,
                itemStyle: d.itemStyle,
              })),
              type: "bar",
            },
          ],
        };
    }
  }, [type, title, data, resolvedMode]);

  useEffect(() => {
    if (!chartRef.current) return;

    const getEchartsTheme = () => {
      switch (resolvedMode) {
        case "dark":
          return "dark";
        case "light":
          return "light";
        default:
          return undefined;
      }
    };

    const theme = getEchartsTheme();

    let chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      chart.dispose(); // Força a re-renderização com o novo tema
    }

    chart = echarts.init(chartRef.current, theme);
    chart.setOption(getOption as echarts.EChartsOption);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [getOption, resolvedMode]);

  return <div ref={chartRef} style={{ width: "100%", height: 300 }} />;
}
