from flask import Flask
from flask import jsonify
import pymysql.cursors 
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
 
conn = pymysql.connect(host='localhost',
                       user='root',
                       password='',
                       db='flights',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)

class user():
    def __init__(self,id,role,token):
        self.id = id
        self.role = role
        self.token = token
@app.route('/loginAuth',methods=['GET'])
def loginAuth():
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

@app.route('/flights-searchFlight',methods = ['Post'])
def searchDb():
    data = request.get_json()
    

def index():
   return "WELCOME!!! This is the home page"
if __name__ == "__main__":
	app.run(host="localhost",port = 5000, debug=True,threaded = True)