import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartArea,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import type { ThreeHourForecast } from "../../api/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WindGradientChartProps {
  data: ThreeHourForecast[]
}

function createGradient(
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: string[]
) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  const step = 1 / (colors.length - 1);

  colors.forEach((color, i) => {
    gradient.addColorStop(i * step, color);
  });

  return gradient;
}

const WindGradientChart: React.FC<WindGradientChartProps> = (data) => {
  
  const firstValues = data.data.slice(0, 30);

  const getWindVelocity = () => {
    const rainValues = firstValues.map((interval) => {
      return interval.velocidade_vento_m_s
    })
    return rainValues
  }

  const getWindVelocityTime = () => {
    const dateTime = firstValues.map((interval) => {
      return interval.data_hora_previsao
    })
    return dateTime
  }

  const chartRef = useRef<ChartJS<"line">>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart || !chart.ctx || !chart.chartArea) return;

    const gradient1 = createGradient(chart.ctx, chart.chartArea, [
      "yellow",
      "orange",
      "red",
      "purple",
    ]);

   
    const updatedData: ChartData<"line"> = {
      labels: getWindVelocityTime(),
      datasets: [
        {
          label: "Velocidade (m/s)",
          data: getWindVelocity(),
          borderColor: gradient1,
          backgroundColor: gradient1,
        },
      ],
    };

    setChartData(updatedData);
  }, [data]);

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Variação da velocidade do vento",
      },
    },
  };

  return <Line ref={chartRef} options={options} data={chartData} />;
};

export default WindGradientChart;
