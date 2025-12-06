import type React from "react";
import { WiBarometer } from "react-icons/wi";
import Card from "../Card/Card";
import { Text } from "@radix-ui/themes";

interface AtmPressureCardProps {
  pressure: number;
}

const AtmPressureCard: React.FC<AtmPressureCardProps> = ({ pressure }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0079fa",
      }}
    >
      <Text color="blue" size="5"><strong>Pressão atmosférica:</strong></Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <WiBarometer
          size={96}
          style={{ color: "white", marginLeft: "-20px" }}
        />
        <Text size="5" color="blue"><strong>{pressure}</strong></Text>
      </div>
      <Text size="3" color="blue" style={{ textAlign: "center" }}>hPa (hectoPascal)</Text>
    </Card>
  );
};

export default AtmPressureCard;
