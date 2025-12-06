import type React from "react";
import Card from "../Card/Card";
import { WiHumidity } from "react-icons/wi";
import { Text } from "@radix-ui/themes";

interface HumidityLevelCardProps {
  humidity: number;
}

const HumidityLevelCard: React.FC<HumidityLevelCardProps> = ({ humidity }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: "#0079fa",
      }}
    >
      <Text size="5" color="blue"><strong>Nível de umidade:</strong></Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
          margin: 'auto'
        }}
      >
        <WiHumidity size={96} style={{ color: 'white' , marginLeft: "-20px" }} />
        <Text size="9" color="blue" style={{ marginLeft: "-20px" }}>
          {humidity}
        </Text>
      </div>
    </Card>
  );
};

export default HumidityLevelCard;
