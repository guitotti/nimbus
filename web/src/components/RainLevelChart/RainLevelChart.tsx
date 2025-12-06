import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import type { ThreeHourForecast } from "../../api/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = "bar";

const chartOptions: ChartOptions<ChartType> = {
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chuva Acumulada - Próximos 3 dias",
    },
  },
  scales: {
    y: {
      min: 0.0,
      max: 3.0,
    },
  },
};

interface RainLevelChartProps {
  data: ThreeHourForecast[]
}

const RainLevelChart: React.FC<RainLevelChartProps> = (data) => {
  console.log('Rain Chart', data);

  const firstValues = data.data.slice(0, 30);

  const getAcumulatedRain = () => {
    const rainValues = firstValues.map((interval) => {
      return interval.volume_chuva_mm_3h
    })
    return rainValues
  }

  const getAcumulatedRainTime = () => {
    const dateTime = firstValues.map((interval) => {
      return interval.data_hora_previsao
    })
    return dateTime
  }

  console.log(getAcumulatedRain())

  const chartData: ChartData<ChartType> = {
    labels: getAcumulatedRainTime(),
    datasets: [
      {
        label: "Precipitação (mm/3h)",
        data: getAcumulatedRain(),
        backgroundColor: "#1e90ff",
        borderColor: "",
        borderWidth: 0,
      },
    ],
  };

  return (
    <div style={{ overflowX: 'scroll', width: "100%", margin: "0 auto" }}>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default RainLevelChart;
