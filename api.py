# server.py
from flask import Flask, request

app = Flask(__name__)

@app.route('/receive-data', methods=['GET'])
def receive_data():
    message = request.args.get('MSG')
    print(f"Mensagem recebida: {message}")
    return "Dados recebidos com sucesso", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Configura para ouvir em todas as interfaces
