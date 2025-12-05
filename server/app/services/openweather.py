import requests
from flask import current_app

import os
from dotenv import load_dotenv

from ..utils.forecast_formatter import transform_forecast_data

load_dotenv()

class OpenWeatherService:
    BASE_URL_CURRENT = os.environ.get("BASE_URL_CURRENT")
    BASE_URL_FORECAST = os.environ.get("BASE_URL_FORECAST")

    def __init__(self):
        self.api_key = current_app.config.get('OPENWEATHER_API_KEY')
        if not self.api_key:
            raise ValueError("OPENWEATHER_API_KEY not configured in Flask.")

    def _make_request(self, url, city_name):
        params = {
            'q': city_name,
            'appid': self.api_key,
            'units': 'metric',
            'lang': 'pt'
        }
        
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.HTTPError as e:
            raise e 

    def get_current_weather(self, city_name):
        raw_data = self._make_request(self.BASE_URL_CURRENT, city_name)

        first_weather = raw_data.get("weather", [{}])[0]
    
        transformed_data = {
            "dt": raw_data.get("dt"),
            "fuso": raw_data.get("timezone"),
            "cidade": raw_data.get("name"),
            "codigo_pais": raw_data.get("sys", {}).get("country"),
            "id_cidade": raw_data.get("id"),

            "latitude": raw_data.get("coord", {}).get("lat"),
            "longitude": raw_data.get("coord", {}).get("lon"),

            "temperatura_atual_celsius": raw_data.get("main", {}).get("temp"),
            "sensacao_termica_celsius": raw_data.get("main", {}).get("feels_like"),
            "temperatura_min_celsius": raw_data.get("main", {}).get("temp_min"),
            "temperatura_max_celsius": raw_data.get("main", {}).get("temp_max"),
            "umidade_porcentagem": raw_data.get("main", {}).get("humidity"),
            "pressao_hpa": raw_data.get("main", {}).get("pressure"),

            "clima_principal": first_weather.get("main"),
            "descricao_clima": first_weather.get("description"),
            
            "velocidade_vento_m_s": raw_data.get("wind", {}).get("speed"),
            "direcao_vento_graus": raw_data.get("wind", {}).get("deg"),
        }

        return transformed_data
    
    def get_five_day_forecast(self, city_name):
        raw_data = self._make_request(self.BASE_URL_FORECAST, city_name)

        formatted_data = transform_forecast_data(raw_data)

        return formatted_data
