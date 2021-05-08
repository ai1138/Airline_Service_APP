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
import {useHistory} from 'react-router-dom';



function BookingAgentPort()

{
   const history = useHistory();
	const [customerBookingAgentID, setBAID] = useState(false);
	const [custFirstName, setcustFirstName] = useState(false);
	const [custLastName, setcustLastName] = useState(false);
	const [custidNum, setcustidNum] = useState("");
	const [custEmailAddress, setcusEmailAddressl] = useState(false);
	const [custCardInformation, setcustCardInformation] = useState(false);
	const [customerTopBoolean, setcustopbool] = useState(false);
   const [PurchaseNewTickets, setNewTicket] = useState(false);
   const [SeeTopCustomers, setTopCustomer] = useState(false);
   const [NewRating, setNewRating] = useState(false);
   const [NewAirplaneShown,setNewAirplane] = useState(false);
   const [NewAirportShown,setNewAirport] = useState(false);
   const [NewFlightShown,setNewFlight] = useState(false);
   const [tableShown,setTableShown] = useState(false);
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
      "booking_agent_id": sessionStorage.getItem("token"),
      "flightNum": flightNum,
      "customer_id": "",
      "first_name": custFirstName,
      "last_name": custLastName,
      "email": custEmailAddress
   };

   const historystuff = () => {
      sessionStorage.setItem("token","");
      sessionStorage.setItem("role",null)
      history.push("/")
   }
	
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
   const TopCustomersRender = (props) => {
	   setTopCustomer(!SeeTopCustomers);
	   setNewTicket(false);
	   console.log("customers topp");

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

 

   const findAllCustomersComiss = () => {
		   if (customerBookingAgentID == this.idNum) {
			   if (customerTopBoolean == false) {
				   customerTopBoolean = false;
				   //algorthim to check if this customers commision is greater than
				   //all others. if customercommission > all other commission
				   console.log("this the highest paying customer")
				   //this is second highest paying customer, etc
				   console.log(custFirstName)
				   console.log(custLastName)
				   //we do this algorithm again for 4 more customers to get the top 5
		   }
	}
   }
				   
	 const findAllCustomersTicks = () => {
		   if (customerBookingAgentID == this.idNum) {
			   if (customerTopBoolean == false) {
				   customerTopBoolean = false;
				   //algorthim to check if this customers commision is greater than
				   //all others. if customertickets > all other tickets
				   console.log("this the highest paying customer")
				   console.log(custFirstName)
				   console.log(custLastName)
				   //we do this algorithm again for 4 more customers to get the top 5
		   }
	}
	}
   const submitNewTicketForm = () => { //this is for the new tickets
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


   const TopCustomers = ( //this is the actual form construction
      <div>
         <Button variant="contained" color="blue" onClick = {findAllCustomersComiss}>Click to See Top Customers via Commission</Button>
         <Button variant="contained" color="blue" onClick = {findAllCustomersTicks}>Click to See Top Customers via Tickets Bought</Button>
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
			<p>Customer First Name:
            <input
            type='text'
            name='firstname'
            value={custFirstName}
            onChange={(e) => setIDNum(e.target.value)}
            />
            </p>
			<p>Customer Last Name:
            <input
            type='text'
            name='lastname'
            value={custLastName}
            onChange={(e) => setIDNum(e.target.value)}
            />
            </p>
			<p>Customer Email Address:
            <input
            type='text'
            name='emailaddy'
            value={custEmailAddress}
            onChange={(e) => setEmail(e.target.value)}
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
      <h1> Booking Agent Portal! </h1>
      <Link variant="contained" color="secondary" to= '/CustomerInfo'> Click to Update Information </Link>
      <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Customer Flights </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" href= './SearchPage'> Search For Flights </Button>
		   <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View My Commission </Button>
      </div>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {PurchaseTicketRender}> Purchase Tickets </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {TopCustomersRender}>  View Top Customers </Button>
      </div>
      <div style = {{display: 'flex', width: `${PurchaseNewTickets || NewRating ? '50%' : '0px'}`, alignItems: 'center'}}>
         {PurchaseNewTickets ? PurchaseTickets: null }    
         {SeeTopCustomers ? TopCustomers : null }


         
      </div>
      </div> 
      <Button style = {{marginTop: '10px', width: '10%'}} variant="contained" color="secondary" onClick = {historystuff}> Log Out </Button>
      </div>
      

   );

}

export default BookingAgentPort;