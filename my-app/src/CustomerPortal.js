import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import Home from './home'
import Navigation from './navigation';
import CustomerInfo from './CustomerInfo';


function CustomerPortal()

{

   const [customerTopBoolean, setcustopbool] = useState(false);
   const [PurchaseNewTickets, setNewTicket] = useState(false);
   const [NewRating, setNewRating] = useState(false);
   const [NewAirplaneShown,setNewAirplane] = useState(false);
   const [NewAirportShown,setNewAirport] = useState(false);
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
	const [paymentID, setPaymentID] = useState("");
	const [purchaseDate, setPurchaseDate] = useState("");
	const [purchaseTime, setPurchaseTime] = useState("");
	const [bookingAgentID, setBookingAgentID] = useState("");
	const [recordID, setRecordID] = useState("");


	  const user = {
		 "top customer boolean": customerTopBoolean,
		"deparrture date": departureDate,
		 "departure time": departureTime,
	   "role": "",
		"customer ID" : idNum,
	   "firstName": firstName, 
	   "lastName": lastName,
	   "email": email,
	   "username": username,
	   "password": password,
	   "airline": airline,
	   "dob": dob,
	   "phoneNumber": phoneNumber,
	   "street": street,
	   "city": city,
	   "state": state,
	   "passport num": passportNum,
	   "passport expiration": passportExpiration,
	   "passport country": passportCountry,
	   "flight number": flightNum,
	   "ticket price": basePrice,
	   "payment id": paymentID,
	   "purchase date": purchaseDate, 
		"purchase time": purchaseTime,
		 "booking agent id": bookingAgentID,
		  "record id": recordID
	    
   };
	
   const AirplaneRender = (props) => {
	   setNewAirplane(!NewAirplaneShown);
      setNewAirport(false);
      setNewFlight(false);
      console.log("airline");
   }
   const AirportRender = (props) => {
	   setNewAirplane(false);
      setNewAirport(!NewAirportShown);
      setNewFlight(false);
      console.log("airline");
   }
   const FlightRender = (props) => {
	   setNewAirplane(false);
      setNewAirport(false);
      setNewFlight(!NewFlightShown);
      console.log("airline");
   }
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
			   if (idNum !== "") {
				   console.log("valid airplane")
				   if (departureDate !== "") {
					   if (departureTime !== "") {
						   console.log("we validddd")
					   }
				   }
			   }
			   else {
				   console.log("no valid id num")
			   }
		   }
		   else {
			   console.log("no valid flight num")
		   }
	   }
   const submitNewTicketForm = () => { //this is for the new tickets
      if(idNum !== "") {
		  if (email !== "") {
			  if (airline !== "") {
				  if (basePrice !== "") {
					  if (flightNum !== "") {
						  if (purchaseDate !== "") {
							  if (purchaseTime !== "") {
								  if (paymentID !== "") {
									  if (bookingAgentID !== "") {
										  console.log("we did it!")
									  }
									  else {
										  console.log("no we didn't...")
									  }
								  }
							  } 
						  }
					  }
				  }
			  }
		  }
	  }
   }


   const CommentRating = ( //this is the actual form construction
      <div>
         <form>
            <p>Depature Date</p>
            <input
            type='text'
            name='depatureDate'
            value={departureDate}
            onChange={(e) => setAirplaneID(e.target.value)}
            />
			<p>Depature Time</p>
            <input
            type='text'
            name='departureTime'
            value={departureTime}
            onChange={(e) => setAirplaneID(e.target.value)}
            />
            <p>Flight Number:</p>
            <input 
            type='text'
            name='name'
            value={flightNum}
            onChange={(e) => setFlightNum(e.target.value)}
            />
            <p> Confirm Customer ID:</p>
            <input
            type='text'
            name='name'
            value={idNum}
            onChange={(e) => setIDNum(e.target.value)}
            />
			<textarea rows="4" cols="50" name="comment" form="usrform">
			Enter your comment here...</textarea>
         </form>

         <Button variant="contained" color="blue" onClick = {submitNewTicketForm}>submit</Button>
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
			<p>Confirm Customer ID Num:
            <input
            type='text'
            name='idNum'
            value={idNum}
            onChange={(e) => setIDNum(e.target.value)}
            />
            </p>
			<p>Confirm Booking Agent ID Num:
            <input
            type='text'
            name='name'
            value={bookingAgentID}
            onChange={(e) => setBookingAgentID(e.target.value)}
            />
            </p>
			<p>Confirm Email Address:
            <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
			onChange={(e) => setPaymentID((e.target.value))}
			onChange={(e) => setPurchaseDate((e.target.value))}
			onChange={(e) => setPurchaseTime((e.target.value))}
			onChange={(e) => setBasePrice(e.target.value)}
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
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null} href = './Table'> View Flights </Button>
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

         
      </div>
      </div> 
      <Button style = {{marginTop: '10px', width: '10%'}} variant="contained" color="secondary" href= './home'> Log Out </Button>
      </div>

   );

}

export default CustomerPortal;