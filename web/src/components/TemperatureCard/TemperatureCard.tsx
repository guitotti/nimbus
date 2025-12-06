import type React from "react";
import Card from "../Card/Card";
import {
  WiHot,
  WiThermometer,
  WiThermometerExterior,
} from "react-icons/wi";
import { Text } from "@radix-ui/themes";

interface TemperatureCardProps {
  maxTemp: number;
  minTemp: number;
  thermalSensation: number;
}

const TemperatureCard: React.FC<TemperatureCardProps> = ({
  maxTemp,
  minTemp,
  thermalSensation,
}) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0079fa",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <WiThermometer size={64} style={{ color: "white" }} />
        <Text size="5" color="blue">
          Temp. máxima:
        </Text>
        <Text size="5" color="blue"><strong>{maxTemp} °C</strong></Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <WiThermometerExterior size={64} style={{ color: "white" }} />
        <Text size="5" color="blue">
          Temp. mínima:
        </Text>
        <Text size="5" color="blue"><strong>{minTemp} °C</strong></Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <WiHot size={64} style={{ color: "white" }} />
        <Text size="5" color="blue">
          Sensação térmica:
        </Text>
        <Text size="5" color="blue"><strong>{thermalSensation} °C</strong></Text>
      </div>
    </Card>
  );
};

export default TemperatureCard;
