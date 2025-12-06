import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

interface TemperatureChartProps {
  data: ThreeHourForecast[];
}

const TemperatureChart: React.FC<TemperatureChartProps> = (data) => {
  const firstValues = data.data.slice(0, 30);

  const getTemperature = () => {
    const temperatures = firstValues.map((interval) => {
      return interval.temperatura_atual_celsius;
    });
    return temperatures;
  };

  const getThermalSensation = () => {
    const thermalSensation = firstValues.map((interval) => {
      return interval.sensacao_termica_celsius;
    });
    return thermalSensation;
  };

  const getUmidityLevel = () => {
    const umidityLevel = firstValues.map((interval) => {
      return interval.umidade_porcentagem;
    });
    return umidityLevel;
  };

  const getTemperatureTime = () => {
    const dateTime = firstValues.map((interval) => {
      return interval.data_hora_previsao;
    });
    return dateTime;
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Variação de Temperatura",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const chartData = {
    labels: getTemperatureTime(),
    datasets: [
      {
        label: "Temperatura  °C",
        data: getTemperature(),
        borderColor: "#1e90ff",
        backgroundColor: "#1e90ff",
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        label: "Sensação Térmica  °C",
        data: getThermalSensation(),
        borderColor: "#f58504",
        backgroundColor: "#f58504",
        borderWidth: 2,
        yAxisID: "y1",
      },
      {
        label: "Umidade (%)",
        data: getUmidityLevel(),
        borderColor: "#30ffe3",
        backgroundColor: "#30ffe3",
        borderWidth: 2,
        yAxisID: "y2",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default TemperatureChart;
