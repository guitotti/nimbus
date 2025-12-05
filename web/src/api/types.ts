import type { WeatherCondition } from "../components/WeatherCard/weather-icons-config";

export interface CurrentWeatherResponse {
  dt: number,
  fuso: number,
  cidade: string,
  clima_principal: WeatherCondition,
  codigo_pais: string,
  descricao_clima: string,
  direcao_vento_graus: number,
  id_cidade: number,
  latitude: number,
  longitude: number,
  pressao_hpa: number,
  sensacao_termica_celsius: number,
  temperatura_atual_celsius: number,
  temperatura_max_celsius: number,
  temperatura_min_celsius: number,
  umidade_porcentagem: number,
  velocidade_vento_m_s: number,
}
