from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response
import pymysql.cursors 
from flask_cors import CORS,cross_origin
import string
import random
app = Flask(__name__)
config = {
  'ORIGINS': [
    'http://localhost:3000',  # React
    'http://127.0.0.1:3000',  # React
  ],
}

CORS(app,resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)
conn = pymysql.connect(host='localhost',
                        port = 8889,
                       user='root',
                       password='root',
                       db='flights',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor)

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

@app.route('/updateFlight', methods =['POST'])
def updateFlightStat():
    data = request.json
    pass

@app.route('/airline-flights-table', methods = ['POST'])
def show_airline_flight():
    data = request.json
    cursor = conn.cursor()
    query = 'SELECT * FROM `airline_staff` WHERE `staff_id` = %(session_id)s'
    cursor.execute(query,data["user"])
    res = cursor.fetchall()
    data["user"]["flightairlineID"] = res[0]["airline_id"]
    query = 'SELECT name FROM `airline` WHERE airline_id = %(flightairlineID)s'
    cursor.execute(query,data["user"])
    airLineName = cursor.fetchall()
    data["user"]["airLineName"] = airLineName[0]["name"]
    if(res):
        query = 'select *\
        from flight inner join airline on %(flightairlineID)s = %(flightairlineID)s\
        where  %(airLineName)s= airline.name'
        cursor.execute(query,data["user"])
        flightNum = cursor.fetchall()
        return jsonify(flightNum)
        
    return jsonify("err")

@app.route('/agent-table',methods=['POST'])
def getAgents():
    data = request.json
    cursor = conn.cursor()
    query = 'SELECT * FROM `airline_staff` WHERE `staff_id` = %(session_id)s'
    cursor.execute(query,data["user"])
    res = cursor.fetchall()
    if(res):
        cursor = conn.cursor()
        query = 'SELECT * FROM `booking_agent`'
        cursor.execute(query)
        data = cursor.fetchall()
        data = jsonify(data)
        return data
    return jsonify("err")

@app.route('/login', methods =['POST'])
def login():
    data = request.json
    cursor = conn.cursor()
    if(data["user"]["role"] == "customer"):
         query = 'SELECT * FROM `customer` WHERE `username` = %(username)s AND `passwords` = %(password)s '
         cursor.execute(query,data["user"])
         airRes = cursor.fetchall()
         if(airRes):
            return jsonify(airRes)
    if(data["user"]["role"] == "bookingagent"):
        query = 'SELECT * FROM `booking_agent` WHERE `username` = %(username)s AND `passwords` = %(password)s '
        cursor.execute(query,data["user"])
        bookRes = cursor.fetchall()
        if(bookRes):
             return jsonify(bookRes)
    if(data["user"]["role"] == "airline"):
        query = 'SELECT * FROM `airline_staff` WHERE `username` = %(username)s AND `passwords` = %(password)s'
        cursor.execute(query,data["user"])
        lineRes = cursor.fetchall()
        if(lineRes):
             return jsonify(lineRes)
    return jsonify(100)
@app.route('/register',methods =['POST'])
def signUp():
    create_id = id_generator(6)
    data = request.json
    data["user"]["id"] = create_id 
    cursor = conn.cursor()
    query = 'SELECT * FROM `customer` WHERE `email` = %(email)s AND `username` = %(username)s '
    cursor.execute(query,data["user"])
    cusRes = cursor.fetchall()
    query = 'SELECT * FROM `booking_agent` WHERE `email` = %(email)s AND `username` = %(username)s '
    cursor.execute(query,data["user"])
    baRes = cursor.fetchall()
    query = 'SELECT * FROM `airline_staff` WHERE `username` = %(username)s'
    cursor.execute(query,data["user"])
    airRes = cursor.fetchall()
    if(cusRes):
        return jsonify("user exists try again")
    elif(baRes):
        return jsonify("user exists try again")
    elif(airRes):
        return jsonify("user exists try again")
    elif(data["user"]["role"] == "customer"):
        query = 'INSERT INTO customer(email, customer_id, username, first_name,last_name,passwords, address, phone_number, passport_number, passport_expiration, passport_country, date_of_birth) \
        VALUES (%(email)s,%(id)s,%(username)s,%(firstName)s,%(lastName)s,%(password)s,%(address)s,%(phoneNumber)s,%(passport num)s ,%(passport expiration)s,%(passport country)s,%(dob)s);'
        cursor.execute(query,data["user"])
        return jsonify("Success")
    elif(data["user"]["role"] == "bookingagent"):
        query ='INSERT INTO `booking_agent`(`first_name`, `last_name`, `username`, `email`, `passwords`, `booking_agent_id`, `customer_id`) \
        VALUES(%(firstName)s,%(lastName)s,%(username)s,%(email)s,%(password)s,%(id)s,"")' 
        cursor.execute(query,data["user"])
        return jsonify("Success")
    elif(data["user"]["role"] == "airline"):
        query = 'SELECT * FROM `airline` WHERE `name` = %(airline)s'
        cursor.execute(query,data["user"])
        lineRes = cursor.fetchall()
        if(not lineRes):
            return jsonify("error airline doesnt exist")
        else:
            data["user"]["airline_id"] = lineRes["airline_id"]
            query = 'INSERT INTO `airline_staff`(`staff_id`,`username`,`airline_id`, `passwords`, `first_name`, `last_name`, `date_of_birth`, `phone_number`) \
            VALUES(%(id)s,%(username)s,%(airline_id)s,%(password)s,%(firstName)s,%(lastName)s,%(dob)s,%(phoneNumber)s)'
            cursor.execute(query,data["user"])
            return jsonify("Success")
    return make_response("how did u get here?")

@app.route('/cus-flights-table',methods=['POST'])
def viewCusFlights():
    data = request.json
    curs = conn.cursor()
    query = 'SELECT * FROM `customer` WHERE `customer_id` = %(customer_ID)s '
    curs.execute(query, data["user"])
    res = curs.fetchall()
    if(res):
        query = 'SELECT * FROM flight\
        INNER JOIN past_flights ON flight.flight_num = past_flights.flight_num\
        INNER JOIN airline ON flight.airline_id = airline.airline_id\
        WHERE past_flights.customer_id = %(customer_ID)s'
        curs.execute(query,data["user"])
        info = curs.fetchall()
        return jsonify(info)
    return jsonify("err")

@app.route('/flights-table',methods=['GET'])
def getFlights():
    cursor = conn.cursor()
    query = 'SELECT * FROM `flight`\
    INNER JOIN airline ON flight.airline_id = airline.airline_id\
    WHERE flight.departure_date_and_time > CURDATE()'
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