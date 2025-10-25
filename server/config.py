import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    OPENWEATHER_API_KEY = os.environ.get("OPENWEATHER_API_KEY")
