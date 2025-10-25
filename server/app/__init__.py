from flask import Flask
from flask_cors import CORS
from config import Config

def create_app():
    app = Flask(__name__)
    
    app.config.from_object(Config)

    CORS(app) 

    from app.api.weather import weather_bp 
    app.register_blueprint(weather_bp, url_prefix='/api/v1/weather')

    return app
