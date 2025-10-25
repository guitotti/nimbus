from flask import Blueprint, jsonify
import requests
from app.services.openweather import OpenWeatherService

weather_bp = Blueprint('weather_bp', __name__) 

@weather_bp.route('/current/<city_name>', methods=['GET'])
def current_weather(city_name):
    try:
        service = OpenWeatherService()
        
        weather_data = service.get_current_weather(city_name)
        
        return jsonify(weather_data), 200

    except requests.exceptions.HTTPError as e:
        status_code = e.response.status_code
        return jsonify({'error': 'City not found or error in external API.'}), status_code

    except ValueError as e:
        return jsonify({'error': str(e)}), 500
        
    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500
