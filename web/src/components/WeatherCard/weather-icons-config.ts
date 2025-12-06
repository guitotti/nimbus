import React from "react";
import {
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnowflakeCold,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";

export type WeatherCondition =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Clear"
  | "Clouds";

export const WeatherLabels: Record<WeatherCondition, string> = {
  Thunderstorm: "Temspestadade",
  Drizzle: "Garoa",
  Rain: "Chuva",
  Snow: "Neve",
  Clear: "Limpo",
  Clouds: "Nublado",
};

// eslint-disable-next-line
type IconComponent = React.FC<any>;

export const weatherIconMap: Record<WeatherCondition, IconComponent> = {
  Thunderstorm: WiThunderstorm,
  Drizzle: WiSprinkle,
  Rain: WiRain,
  Snow: WiSnowflakeCold,
  Clear: WiDaySunny,
  Clouds: WiCloudy,
};
