import type { WeatherCondition } from "../components/WeatherCard/weather-icons-config";

export interface CurrentWeatherResponse {
  dt: number;
  fuso: number;
  cidade: string;
  clima_principal: WeatherCondition;
  codigo_pais: string;
  descricao_clima: string;
  direcao_vento_graus: number;
  id_cidade: number;
  latitude: number;
  longitude: number;
  pressao_hpa: number;
  sensacao_termica_celsius: number;
  temperatura_atual_celsius: number;
  temperatura_max_celsius: number;
  temperatura_min_celsius: number;
  umidade_porcentagem: number;
  velocidade_vento_m_s: number;
}

export interface ThreeHourForecast {
  clima_principal: string;
  data_hora_previsao: string;
  descricao_clima: string;
  probabilidade_chuva: number;
  sensacao_termica_celsius: number;
  temp_max_celsius: number;
  temp_min_celsius: number;
  temperatura_atual_celsius: number;
  umidade_porcentagem: number;
  velocidade_vento_m_s: number;
  volume_chuva_mm_3h: number;
}

export interface ForecastWeatherReponse {
  cidade: string;
  codigo_pais: string;
  id_cidade: number;
  latitude: number;
  longitude: number;
  previsoes_horarias: ThreeHourForecast[];
}
