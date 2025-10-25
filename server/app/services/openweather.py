import requests
from flask import current_app

import os
from dotenv import load_dotenv

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
        # TODO: create a function to format data -> (app/utils/data_formatter)
        return raw_data 
