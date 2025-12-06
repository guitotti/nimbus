import type React from "react";
import { Text } from "@radix-ui/themes";
import Card from "../Card/Card";

interface CityInfoCardProps {
  city: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}

const CityInfoCard: React.FC<CityInfoCardProps> = ({
  city,
  countryCode,
  latitude,
  longitude,
}) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: "#0079fa",
      }}
    >
      <div style={{ marginTop: 0 }}>
        <Text size="5" color="blue"><strong>Informações da Cidade</strong></Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <Text size="5" color="blue">Cidade: <strong>{city}</strong></Text>
        <Text size="5" color="blue">País: <strong>{countryCode}</strong></Text>
        <Text size="5" color="blue">Latitude: <strong>{latitude}</strong></Text>
        <Text size="5" color="blue">Longitude: <strong>{longitude}</strong></Text>
      </div>
    </Card>
  );
};

export default CityInfoCard;
