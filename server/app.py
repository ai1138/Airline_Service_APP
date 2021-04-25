from flask import Flask
'''from flask import jsonify
import pymysql.cursors '''
app = Flask(__name__)
 
'''conn = pymysql.connect(host='localhost',
                       user='root',
                       password='',
                       db='flights',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)

@app.route('/flights',methods=['GET'])
def getFlights():
    cursor = conn.cursor()
    query = 'SELECT flight_num,statuses,departure_date_and_time,departure_airport,airport_arrival,arrival_date_and_time FROM flight'
    cursor.execute(query)
    data = cursor.fetchall()
    data = jsonify(data)
    return data'''
@app.route('/home',methods=['GET'])
def home():
    return "hello"
@app.route('/')
def index():
   return "WELCOME!!! This is the home page"

if __name__ == "__main__":
	app.run(host="localhost",port = 5000, debug=True,threaded = True)