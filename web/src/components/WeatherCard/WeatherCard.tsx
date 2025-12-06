import React from "react";
import {
  type WeatherCondition,
  weatherIconMap,
} from "./weather-icons-config.ts";
import Card from "../Card/Card.tsx";
import { Text } from "@radix-ui/themes";

interface WeatherCardProps {
  condition: WeatherCondition;
  temperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  condition,
  temperature,
}) => {
  const IconComponent = weatherIconMap[condition];

  return (
    <Card
      style={{
        backgroundColor: "#0079fa",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
      }}
    >
      <Text size="5" color="blue">
        <strong>Condição: {condition}</strong>
      </Text>
      <IconComponent size={128} color="white" />

      <Text size="5" color="blue">Temperatura: <strong>{temperature} °C</strong></Text>
    </Card>
  );
};

export default WeatherCard;
