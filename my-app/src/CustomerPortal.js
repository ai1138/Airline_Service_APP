import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import Home from './home'
import Navigation from './navigation';
import CustomerInfo from './CustomerInfo';
import {useHistory} from 'react-router-dom';
import RatingTable from './RatingTable';


function CustomerPortal()

{
   const history = useHistory();
   const [rating, setRating] = useState("");
   const [comment, setComment] = useState("");
   const [customerTopBoolean, setcustopbool] = useState(false);
   const [PurchaseNewTickets, setNewTicket] = useState(false);
   const [NewRating, setNewRating] = useState(false);
   const [viewTable, setTable] = useState(false)
   const [data,updateData] = useState("");
   const [NewFlightShown,setNewFlight] = useState(false);
   const [airportName, setAirportName] = useState("");
   const [airlineID, setAirlineID] = useState("");
   const [city, setCity] = useState("");
   const [flightNum, setFlightNum] = useState("");
   const [flightStat, setFlightStat] = useState("");
   const [departureDate, setDepartureDate] = useState("");
   const [departureTime, setDepartureTime] = useState("");
   const [flightairlineID, flightsetAirlineID] = useState("");
   const [departureAirport, setDepartureAirport] = useState("");
   const [arrivalAirport, setArrivalAirport] = useState("");
   const [arrivalDate, setArrivalDate] = useState("");
   const [arrivalTime, setArrivalTime] = useState("");
   const [basePrice, setBasePrice] = useState("");
   const [idNum, setIDNum] = useState("");
   const [airplaneName, setAirplaneName] = useState("");
   const [numofSeats, setNumofSeats] = useState("");
   const [airplaneID, setAirplaneID] = useState("");
   const [flightnumstatus, setflightnumstatus] = useState("");
   const [newflightstatus, setnewflightstatus] = useState("");
   const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [airline, setAirline] = useState("");
	const [dob, setDOB] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [street, setStreet] = useState("");
	const [state, setState] = useState("");
	const [passportNum, setPassportNum] = useState("");
	const [passportExpiration, setPassportExpiration] = useState("");
	const [passportCountry, setPassportCountry] = useState("");
	const [ticketID, setticketID] = useState("");
	const [purchaseDate, setPurchaseDate] = useState("");
	const [purchaseTime, setPurchaseTime] = useState("");
	const [bookingAgentID, setBookingAgentID] = useState("");
	const [paymentID, setPaymentID] = useState("");


	  const user = {
		  "comment": comment,
		 "top customer boolean": customerTopBoolean,
		"deparrture date": departureDate,
		 "departure time": departureTime,
		"customer_ID" : sessionStorage.getItem("token"),
	   "firstName": firstName, 
	   "lastName": lastName,
	   "email": email,
	   "username": username,
	   "password": password,
	   "airline_id": "",
	   "dob": dob,
	   "phoneNumber": phoneNumber,
	   "street": street,
	   "city": city,
	   "state": state,
	   "passport num": passportNum,
	   "passport expiration": passportExpiration,
	   "passport country": passportCountry,
	   "flight_number": flightNum,
	   "ticket_price": "",
	   "ticket_id": "",
	   "purchase_date": "", 
		 "booking agent id": bookingAgentID,
		  "record_id": "",
		  "payment_id": "", 
		  "rating": rating, 
		  "ticket_price": ""
	    
   };

   const historystuff = () => {
	  sessionStorage.setItem("token", null);
	  sessionStorage.setItem("role", null);
     console.log("hello")
     history.push("/");
   }
	
   const viewFlightRender = () =>
   {
      setTable(!viewTable);
   }
   const getItems = () => {
      fetch("http://localhost:5000/cus-flights-table",{
         method: 'POST',
         body: JSON.stringify({ user }),
         headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(response => {
         updateData(response);
      })
      .catch((error) => console.log(error));
   }
   useEffect(() => {
      getItems();
    }, []);
   const rateTable = (
      <RatingTable data = {data}/>
   )
   const PurchaseTicketRender = (props) => {
      setNewTicket(!PurchaseNewTickets);
	  setNewRating(false);
      console.log("tickets");
   }
   const CommentRatingRender = (props) => {
	   setNewRating(!NewRating);
	   setNewTicket(false);
	   console.log("rating");

   }
  // handlePurchaseDate(event)  {
		//this function is supposed to read purchase date from the system
//		this.setPurchaseDate({value: event.target.value});
//	}
   
//	handlePurchaseTime(event)  {
		//this function is supposed to read purchase time from the system
//		this.setPurchaseDate({value: event.target.value})
//	}
//	handleSoldPrice(event)  {
		//this function is supposed to read sold price from database
//		this.setPurchaseDate({value: event.target.value})
//	}
//	handlePaymentIDe(event)  {
		//this function is supposed to generate a random payment id and set it
//		this.setPurchaseDate({value: event.target.value})
//	}

 

   const submitNewCommentRateForm = () => {
		   if (flightNum !== "") {
				   console.log("valid airplane")
				   if (departureDate !== "") {
					   if (departureTime !== "") {
						   console.log("we validddd")
							   fetch('http://localhost:5000/giveRatings', {
								   method: 'POST',
								   body: JSON.stringify({user}),
								   headers: { 'Content-Type': 'application/json' },
            					})
							   .then(res => res.json())
							   .then(data => {
								   console.log(data);
							   })
							   }
						   }
			   }
			   else {
				   console.log("no valid id num")
			   }
	   }
   const submitNewTicketForm = () => { //this is for the new tickets
					  if (flightNum !== "") {
					  	console.log("we made it bro!")
						fetch('http://localhost:5000/buyNewTicket', {
								   method: 'POST',
								   body: JSON.stringify({user}),
								   headers: { 'Content-Type': 'application/json' },
            					})
                                 .then(res => res.json())
                                    .then(data => {
                                       console.log(data);
                                       data = String(JSON.stringify(data))
                                       data = JSON.stringify(data)
                                       if(console.log(data.valueOf() === ("NoPayment").valueOf()))
                                          console.log("yeno")
                                          history.push("/CustomerInfo")
                                      // history.push("/")    
                                     })
                                     .catch((error) => {
                                       console.error('Error:', error);
                                     });
					}
   }


   const CommentRating = ( //this is the actual form construction
      <div>
         <form>
            <p>Depature Date</p>
            <input
            type='date'
            name='depatureDate'
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            />
			<p>Depature Time</p>
            <input
            type='text'
            name='departureTime'
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            />
            <p>Flight Number:</p>
            <input 
            type='text'
            name='flightNum'
            value={flightNum}
            onChange={(e) => setFlightNum(e.target.value)}
            />
			<p>Enter your comment here:</p>
			<textarea rows="4" cols="50" name="comment" form="usrform"
			value={comment}
			onChange={(e) => setComment(e.target.value)}
			>
			</textarea>
			<p>Please enter a number between 1-100 to give a rating:</p>
            <input 
            type='number'
            name='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
         </form>

         <Button variant="contained" color="blue" onClick = {submitNewCommentRateForm}>submit</Button>
      </div>
   );
  
   const PurchaseTickets = (
      <div>
         <form>
	   		<SearchPage/>
            <p>Flight Number:
            <input
            type='text'
            name='flightNum'
            value={flightNum}
            onChange={(e) => setFlightNum(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue" onClick = {submitNewTicketForm}>submit</Button>
      </div>
   );
   //yes
   return (
      
   <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <img src = {logo} alt = "Logo" height="200" width="200" />
      <h1> Customer Portal! </h1>
      <Link variant="contained" color="secondary" to= '/CustomerInfo'> Click to Update Information </Link>
      <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {viewFlightRender}> View Flights </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" href= './SearchPage'> Search For Flights </Button>
		<Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> Track My Spending </Button>

         
      </div>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {PurchaseTicketRender}> Purchase Tickets </Button>
<Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {CommentRatingRender}> Give Ratings </Button>
      </div>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating ? '50%' : '0px'}`, alignItems: 'center'}}>
         {PurchaseNewTickets ? PurchaseTickets: null }    
         {NewRating ? CommentRating : null }
         {viewTable ? rateTable : null}

         
      </div>
      </div> 
      <Button style = {{marginTop: '10px', width: '10%'}} variant="contained" color="secondary" onClick = {historystuff}> Log Out </Button> 
      </div>

   );

}

export default CustomerPortal;