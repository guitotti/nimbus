import React from 'react';
import { type WeatherCondition, weatherIconMap } from './weather-icons-config.ts';
import Card from '../Card/Card.tsx';

interface WeatherCardProps {
  condition: WeatherCondition;
  temperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ condition, temperature }) => {
  const IconComponent = weatherIconMap[condition];

  return (
    <Card>
      <h3>Condição: {condition}</h3>
      <IconComponent size={64} color="#007bff" />
      
      <p>Temperatura: {temperature}°C</p>
    </Card>
  );
};

export default WeatherCard;
