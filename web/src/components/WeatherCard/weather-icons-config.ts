import React from 'react';
import { 
  WiThunderstorm, 
  WiSprinkle, 
  WiRain, 
  WiSnowflakeCold, 
  WiDaySunny, 
  WiCloudy 
} from 'react-icons/wi';

export type WeatherCondition = 
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Clear'
  | 'Clouds';


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
