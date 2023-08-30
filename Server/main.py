from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/getRequest")
def getdata():
    data = {
        "name":"david"
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)