from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response
import pymysql.cursors 
from flask_cors import CORS,cross_origin
import string
import random
from datetime import *
app = Flask(__name__)
config = {
  'ORIGINS': [
    'http://localhost:3000',  # React
    'http://127.0.0.1:3000',  # React
  ],
}

CORS(app,resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)
 
conn = pymysql.connect(host='localhost',
                       user='root',
                       password='root',
                       db='flights',
                       charset='utf8mb4',
                       cursorclass=pymysql.cursors.DictCursor, port=8889)
def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

@app.route('/buyNewTicket', methods = ['POST'])
def newTicket():
    data = request.json
    curs = conn.cursor()
    query = 'SELECT * FROM `customer` WHERE `customer_id` = %(customer_ID)s '
    curs.execute(query, data["user"])
    res = curs.fetchall()
    if (res):
        query = 'SELECT * FROM `flight` WHERE `flight_num` = %(flight_number)s'
        curs.execute(query, data["user"])
        flight = curs.fetchall()
        print("this is resss!!!", flight[0]["departure_date_and_time"])
        print("this is datetimeee nowww", datetime.now())
        if (flight[0]["departure_date_and_time"] > datetime.now()):
            query_1 = 'SELECT * FROM `payment_info` WHERE `customer_id` = %(customer_ID)s'
            curs.execute(query_1, data["user"])
            res_1 = curs.fetchall()
            if (res_1):
                data["user"]["ticket_id"] = id_generator()
                data["user"]["ticket_price"] = flight[0]["base_price"]
                data["user"]["payment_id"] = res_1[0]["payment_id"]
                data["user"]["purchase_date"] = datetime.now()
                data["user"]["email"] = res[0]["email"]
                data["user"]["airline_id"] = flight[0]["airline_id"]
                query_2 = "INSERT INTO `ticket`(`ticket_id`, `customer_id`, \
                `customer_email_address`, `airline_id`, `flight_num`, \ `sold_price`, `payment_id`, \
                `purchase_date_and_time`, `booking_agent_id`) VALUES \
                (%(ticket_id)s,%(customer_ID)s,%(email)s,%(airline_id)s,%(flight_number)s,%(ticket_price)s,%(payment_id)s,%(purchase_date)s,%("")s)"
                return jsonify("we purchaseddd")
            return False
        return jsonify("ee got through finding a flight")
    return jsonify("big error")

@app.route('/giveRatings', methods = ['POST'])
def submitRating():
    data = request.json
    custID = data["user"]["customer_ID"]
    curs = conn.cursor()
    query = 'SELECT * FROM `customer` WHERE `customer_id` = %(customer_ID)s '
    curs.execute(query, data["user"])
    res = curs.fetchall()

    if (res):
       query_1 = 'SELECT * FROM `flight` WHERE `flight_num` = %(flight_number)s'
       curs.execute(query_1, data["user"])
       res_1 = curs.fetchall()

       if (res_1):
           data["user"]["record_id"] = id_generator()
           query_2 = 'INSERT INTO `past_flights`(`flight_num`, `customer_id`, `rate`, `comments`, `record_id`) \
           VALUES (%(flight_number)s,%(customer_ID)s,%(rating)s,%(comment)s,%(record_id)s)'
           curs.execute(query_2, data["user"])
           return jsonify("successfullll")
       

@app.route('/updateFlight', methods =['POST'])
def updateFlightStat():
    data = request.json
    pass
@app.route('/airline-flights-table', methods = ['POST'])
def show_airline_flight():
    pass    

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
    return jsonify("failed to find user")
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
