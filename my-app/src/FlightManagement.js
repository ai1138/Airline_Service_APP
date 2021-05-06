import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import Home from './home'
import Navigation from './navigation';

function FlightManagement()
{
   const [NewAirplaneShown,setNewAirplane] = useState(false);
   const [NewAirportShown,setNewAirport] = useState(false);
   const [NewFlightShown,setNewFlight] = useState(false);
   const [FlightStatusShown,setFlightStatus] = useState(false);
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


   const flightstuff = {
      "airportName": airportName,
      "airlineID": airlineID,
      "city": city,
      "flightNum": flightNum,
      "flightStat": flightStat,
      "departureDate": departureDate,
      "departureTime": departureTime,
      "flightairlineID": flightairlineID,
      "departureAirport": departureAirport,
      "arrivalAirport": arrivalAirport,
      "arrivalDate": arrivalDate,
      "arrivalTime": arrivalTime,
      "basePrice": basePrice,
      "idNum": idNum,
      "airplaneName": airplaneName,
      "numofSeats": numofSeats,
      "airplaneID": airplaneID,
      "flightnumstatus": flightnumstatus,
      "newflightstatus": newflightstatus
   };

   const AirplaneRender = (props) => {
	   setNewAirplane(!NewAirplaneShown);
      setNewAirport(false);
      setNewFlight(false);
      setFlightStatus(false);
      console.log("airline");
   }
   const AirportRender = (props) => {
	   setNewAirplane(false);
      setNewAirport(!NewAirportShown);
      setNewFlight(false);
      setFlightStatus(false);
      console.log("airline");
   }
   const FlightRender = (props) => {
	   setNewAirplane(false);
      setNewAirport(false);
      setNewFlight(!NewFlightShown);
      setFlightStatus(false);
      console.log("airline");
   }
   const FlightStatusRender = (props) => {
	   setNewAirplane(false);
      setNewAirport(false);
      setNewFlight(false);
      setFlightStatus(!FlightStatusShown);
      console.log("airline");
   }
   const submitNewAirportForm = () =>
   {
      if(airportName !=="")
         if(airlineID!== "")
            if(city!=="")
            {
               console.log("yeee")
            }
            else
            {
               console.log("naw")
            }
   }
   
   const submitNewAirplaneForm = () =>
   {
      if(airplaneName !=="")
         if(numofSeats !== "")
            if(airplaneID !== "")
            {
               console.log("yeee")
            }
            else
            {
               console.log("naw")
            }
   }

   const submitNewFlightForm = () =>
   {
      if(flightNum !=="")
         if(flightStat !== "")
            if(departureDate !== "")
               if(departureTime !== "")
                  if(flightairlineID!== "")
                     if(departureAirport !== "")
                        if(arrivalAirport !== "")
                           if(arrivalDate !== "")
                              if(arrivalTime !== "")
                                 if(basePrice !== "")
                                    if(idNum !== "")
                                    {
                                       console.log("yeee")
                                    }
                                    else
                                    {
                                       console.log("naw")
                                    }
   }

   const submitFlightStatusForm = () =>
   {
      if(flightnumstatus !=="")
         if(newflightstatus !== "")
         {
            console.log("yeee")
         }
         else
         {
            console.log("naw")
         }
   }


   const NewAirportForm = (
      <div>
         <form>
            <p>Add New Airport Name:</p>
            <input
            type='text'
            name='airportName'
            value={airportName}
            onChange={(e) => setAirportName(e.target.value)}
            />
            <p>Airline ID:</p>
            <input 
            type='text'
            name='airlineID'
            value={airlineID}
            onChange={(e) => setAirlineID(e.target.value)}
            />
            <p> City:</p>
            <input
            type='text'
            name='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
         </form>
         <Button variant="contained" color="blue" onClick = {submitNewAirportForm}>submit</Button>
      </div>
   );
   const NewAirplaneForm = (
      <div>
         <form>
            <p>New Airplane Name:
            <input
            type='text'
            name='airplaneName '
            value={airplaneName}
            onChange={(e) => setAirplaneName(e.target.value)}
            />
            </p>
            <p>Number of Seats:
            <input
            type='text'
            name='numofSeats'
            value={numofSeats}
            onChange={(e) => setNumofSeats(e.target.value)}
            />
            </p>
            <p>Airline ID:
            <input
            type='text'
            name='airplaneID'
            value={airplaneID}
            onChange={(e) => setAirplaneID(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue" onClick = {submitNewAirplaneForm}>submit</Button>
      </div>
   );
   const NewFlightForm = (
      <div>
         <form>
            <p>Flight Number:
            <input
            type='text'
            name='flightNum'
            value={flightNum}
            onChange={(e) => setFlightNum(e.target.value)}
            />
            </p>
            <p>Status:
            <input
            type='text'
            name='flightStat'
            value={flightStat}
            onChange={(e) => setFlightStat(e.target.value)}
            />
            </p>
            <p> Departure Date:
            <input
            type='text'
            name='departureDate'
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            />
            </p>
            <p> Departure Time:
            <input
            type='text'
            name='departureTime'
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            />
            </p>
            <p> Airline ID:
            <input
            type='text'
            name='flightairlineID'
            value={flightairlineID}
            onChange={(e) => flightsetAirlineID(e.target.value)}
            />
            </p>
            <p> Departure Airport:
            <input
            type='text'
            name='departureAirport'
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
            />
            </p>
            <p> Arrival Airport:
            <input
            type='text'
            name='arrivalAirport'
            value={arrivalAirport}
            onChange={(e) => setArrivalAirport(e.target.value)}
            />
            </p>
            <p> Arrival Date:
            <input
            type='text'
            name='arrivalDate'
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            />
            </p>
            <p> Arrival Time:
            <input
            type='text'
            name='arrivalTime'
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            />
            </p>
            <p> Base Price:
            <input
            type='text'
            name='basePrice'
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            />
            </p>
            <p> Identification Number:
            <input
            type='text'
            name='idNum'
            value={idNum}
            onChange={(e) => setIDNum(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue" onCick = {submitNewFlightForm}>submit</Button>
      </div>
   );
   const FlightStatus = (
      <div>
         <form>
            <p>Flight Number:
            <input
            type='text'
            name='flightnumstatus'
            value={flightnumstatus}
            onChange={(e) => setflightnumstatus(e.target.value)}
            />
            </p>
            <p>Flight Status:
            <input
            type='text'
            name='newflightstatus'
            value={newflightstatus}
            onChange={(e) => setnewflightstatus(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue" onClick = {submitFlightStatusForm}>submit</Button>
      </div>
   );
   
   return (
      
   <div style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <img src = {logo} alt = "Logo" height="200" width="200" />
      <h1> Staff Portal </h1>
      <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
      <div style = {{display: 'flex', width: `${FlightStatusShown || NewFlightShown || NewAirplaneShown || NewAirportShown ? '50%' : '100%'}`,  alignItems: 'right', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Flights </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Flight Ratings </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Booking Agents </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Frequent Customers </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Reports </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Frequent Customers </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Revenue Comparison </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {null}> View Top Destinations </Button>
         
      </div>
      <div style = {{display: 'flex', width: `${FlightStatusShown || NewFlightShown || NewAirplaneShown || NewAirportShown ? '50%' : '100%'}`,  alignItems: 'right', flexDirection: 'column'}}>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {FlightStatusRender}> Update Flight Status </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {FlightRender}> Add New Flight </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {AirplaneRender}> Add New Airline </Button>
         <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {AirportRender}> Add New Airport </Button>
      </div>
      <div style = {{display: 'flex', width: `${FlightStatusShown || NewFlightShown || NewAirplaneShown || NewAirportShown ? '50%' : '0px'}`, alignItems: 'center'}}>
         {FlightStatusShown ? FlightStatus: null }    
         {NewFlightShown ? NewFlightForm : null }
         {NewAirplaneShown ? NewAirplaneForm : null }
         {NewAirportShown ? NewAirportForm: null }
          
      </div>
      </div> 
      </div>

   );

}

export default FlightManagement;