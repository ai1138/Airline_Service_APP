import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';


function FlightManagement()
{
   const [NewAirplaneShown,setNewAirplane] = useState(false);
   const [NewAirportShown,setNewAirport] = useState(false);
   const [NewFlightShown,setNewFlight] = useState(false);
   const [FlightStatusShown,setFlightStatus] = useState(false);

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
   const NewAirportForm = (
      <div>
         <form>
            <p>Add New Airport Name:</p>
            <input
            type='text'
            name='name'
            //value={username} //need to make a usestate for value and onchange once everything is collabed!
            //onChange={(e) => setUserName(e.target.value)}
            />
            <p>Airline ID:</p>
            <input 
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            <p> City:</p>
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
         </form>
         <Button variant="contained" color="blue">submit</Button>
      </div>
   );
   const NewAirplaneForm = (
      <div>
         <form>
            <p>New Airplane Name:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p>Number of Seats:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p>Airline ID:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue">submit</Button>
      </div>
   );
   const NewFlightForm = (
      <div>
         <form>
            <p>Flight Number:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p>Status:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Departure Date:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Departure Time:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Airline ID:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Departure Airport:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Arrival Airport:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Arrival Date:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Arrival Time:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Base Price:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p> Identification Number:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue">submit</Button>
      </div>
   );
   const FlightStatus = (
      <div>
         <form>
            <p>Flight Number:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
            <p>Flight Status:
            <input
            type='text'
            name='name'
            //value={password}
            //onChange={(e) => setPassWord(e.target.value)}
            />
            </p>
         </form>
         <Button variant="contained" color="blue">submit</Button>
      </div>
   );
   return (
    <div style = {{display: "flex", flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"}}>
       <img src = {logo} alt = "Logo" height="200" width="200" />
       <tr> FLIGHT TABLE </tr>
       <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
         <div style = {{display: 'flex', width: `${FlightStatusShown || NewFlightShown || NewAirplaneShown || NewAirportShown ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
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