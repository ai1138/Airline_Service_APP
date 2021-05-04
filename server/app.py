from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response
import pymysql.cursors 
from flask_cors import CORS
import jwt
app = Flask(__name__)
CORS(app)
 
conn = pymysql.connect(host='localhost',
                       user='root',
                       password='',
                       db='flights',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)


@app.route('/login/:id/:passwrd', methods =['GET'])
def login():
    arr = ['`customer`' , '`booking_agent`', 'airline_staff']
    userName = request.args.get("id")
    pw = request.args.get("id")
    cursor = conn.cursor()
    query = 'SELECT * FROM `customer` WHERE `email` = ' '"' + userName  + '"' + ' AND `passwords` = ' + '"' + pw  + '""'
    cursor.execute(query)
    data = cursor.fetchall()
    return jsonify(data)
@app.route('/register',methods =['POST'])
def signIn():
    data = request.json
    if(data["user"]["role"] == "customer"):
        cursor = conn.cursor()
        #query = 
        cursor.execute(query)
    elif(data["user"]["role"] == "bookingagent"):
        pass
    else:
        pass
@app.route('/flights-table',methods=['GET'])
def getFlights():
    cursor = conn.cursor()
    query = 'SELECT flight_num,statuses,departure_date_and_time,departure_airport,airport_arrival,arrival_date_and_time FROM flight'
    cursor.execute(query)
    data = cursor.fetchall()
    data = jsonify(data)
    return data
@app.route('/home',methods = ['GET'])
def home():
    return "hello"


    

def index():
   return "WELCOME!!! This is the home page"
if __name__ == "__main__":
	app.run(host="localhost",port = 5000, debug=True,threaded = True)