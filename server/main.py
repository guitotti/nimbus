from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Servidor Flask rodando! 🚀"

@app.route('/test/api')
def api_test():
    data = {
        "status": "online",
        "message": "API de teste funcionando corretamente!",
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)