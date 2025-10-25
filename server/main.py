from app import create_app 
import os
from dotenv import load_dotenv

load_dotenv()

app = create_app()

PORT = os.environ.get("PORT", 5001)

if __name__ == '__main__':
    app.run(debug=True, port=PORT)
