import type React from "react";
import Card from "../Card/Card";
import { Text } from "@radix-ui/themes";
import { WiStrongWind } from "react-icons/wi";

interface WindCardProps {
  windVelocity: number;
}

const WindCard: React.FC<WindCardProps> = ({ windVelocity }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#0079fa",
      }}
    >
      <Text size="5" color="blue"><strong>Velocidade do vento</strong></Text>
      <WiStrongWind size={128} style={{ margin: "auto" }} color="white" />
      <div style={{ margin: "auto" }}>
        <Text size="5" color="blue"><strong>{windVelocity}</strong></Text>{" "}
        <Text size="5" color="blue">metros/segundo</Text>
      </div>
    </Card>
  );
};

export default WindCard;
