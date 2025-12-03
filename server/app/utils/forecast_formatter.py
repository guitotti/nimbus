import time
from typing import Dict, Any, List

def _map_time_forecast(forecast_item: Dict[str, Any]) -> Dict[str, Any]:
    first_weather = forecast_item.get("weather", [{}])[0]
    
    timestamp_unix = forecast_item.get("dt")
    date_time_reading = time.strftime(
        '%Y-%m-%d %H:%M:%S', 
        time.localtime(timestamp_unix)
    ) if timestamp_unix else None
    
    rain_volume = forecast_item.get("rain", {}).get("3h", 0.0)

    return {
        "data_hora_previsao": date_time_reading,
        "temperatura_atual_celsius": forecast_item.get("main", {}).get("temp"),
        "sensacao_termica_celsius": forecast_item.get("main", {}).get("feels_like"),
        "temp_min_celsius": forecast_item.get("main", {}).get("temp_min"),
        "temp_max_celsius": forecast_item.get("main", {}).get("temp_max"),
        "umidade_porcentagem": forecast_item.get("main", {}).get("humidity"),
        "descricao_clima": first_weather.get("description"),
        "clima_principal": first_weather.get("main"),
        "volume_chuva_mm_3h": rain_volume,
        "probabilidade_chuva": forecast_item.get("pop", 0.0),
        "velocidade_vento_m_s": forecast_item.get("wind", {}).get("speed"),
    }


def transform_forecast_data(raw_data: Dict[str, Any]) -> Dict[str, Any]:  
    city_data = raw_data.get("city", {})
    raw_forecast_list = raw_data.get("list", [])
    
    global_data = {
        "cidade": city_data.get("name"),
        "codigo_pais": city_data.get("country"),
        "id_cidade": city_data.get("id"),
        "latitude": city_data.get("coord", {}).get("lat"),
        "longitude": city_data.get("coord", {}).get("lon"),
        "total_previsoes_3h": raw_data.get("cnt"),
    }
    
    transformed_forecast = [
        _map_time_forecast(item) 
        for item in raw_forecast_list
    ]
    
    return {
        **global_data,
        "previsoes_horarias": transformed_forecast
    }