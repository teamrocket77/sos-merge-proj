from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import os
from dotenv import load_dotenv, dotenv_values

load_dotenv()
app = Flask(__name__)
app.config['MYSQL_HOST'] = os.getenv('HOST')
app.config['MYSQL_USER'] = os.getenv('USER')
app.config['MYSQL_PASSWORD'] = os.getenv('PASS')
app.config['MYSQL_DB'] = os.getenv('DB')


mysql = MySQL(app)

@app.route("/")
def home():
    return "Home"

@app.route("/getRequest")
def getdata():
    data = {
        "name":"david"
    }
    return jsonify(data)

@app.route("/Login", methods=('POST',))
def login():
    req = request.get_json()
    UserName = req['UserName']
    Password = req['Password']
    print(UserName)
    cursor = mysql.connection.cursor()
    query_string = "SELECT * FROM Users WHERE UserName = %s AND Password = %s"

    cursor.execute(query_string,[UserName, Password])
    dat = cursor.fetchall()

    if(dat):
        data = {
            "Login": "True",
            "Token":"token"
        }
    else:
        data = {
            "Login": "False",
        }

    
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
