import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';


 
function Home()
{     //make loginInfo be either customer,bookingagent or airline and render the page according to state 
      //if loginInfo is "" that means no one loged in
    const [noLogin,setNoLogin] = useState(false);
    const [userLogin, setUserLogin] = useState(false);
    const [bookingAgentLogin, setBookingAgentLogin] = useState(false);
    const [airLineLogin, setAirLineLogin] = useState(false);

   const noLoginRender = () =>
   {
      setNoLogin(!noLogin);
      setUserLogin(false);
      setBookingAgentLogin(false);
      setAirLineLogin(false);
   }
   const userLoginRender = () =>
   {
      setNoLogin(false);
      setUserLogin(!userLogin);
      setBookingAgentLogin(false);
      setAirLineLogin(false);
   }
   const bookingAgentLoginRender  = () =>
   {
      setNoLogin(false);
      setUserLogin(false);
      setBookingAgentLogin(!bookingAgentLogin);
      setAirLineLogin(false);
   }
   const airLineLoginRender =  () =>
   {
      setNoLogin(false);
      setUserLogin(false);
      setBookingAgentLogin(false);
      setAirLineLogin(!airLineLogin);
   }
 
   const defaultPage = (
      
      <div style = {{display: "flex", flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"}}>
        <img src = {logo} alt = "Logo" height="200" width="200" />
        <h1>Welcome Aboard!</h1> 
        <Link variant="contained" color="secondary" to= '/lspage'>Log In/Register</Link>
        <tr>At your convenience, anytime, anywhere</tr>
        <SearchPage/>
     </div>
    );
    
    const cusPage = (
       <div>  heyyy</div>
   )







    const baPage = (
      <div>  heyyy</div>
   )



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
   const airPage = (
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
         <tr> Flight Ratings </tr>
         <tr>Frequent custies!</tr> 
         <tr> Report </tr>
         <tr>Revenue earned</tr>
         <tr> Top Destination table </tr>
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {noLoginRender}> LogOut </Button>
         {noLogin ? defaultPage : null }
  </div>
   )











   return (
      <div>
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {noLoginRender}>default </Button>
            {noLogin ? defaultPage : null }
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {userLoginRender}>customer </Button>
            {userLogin ? cusPage : null }
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {bookingAgentLoginRender}>booking </Button>
            {bookingAgentLogin ? baPage : null }
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {airLineLoginRender}>airline </Button>
            {airLineLogin ? airPage : null }
      </div>
      
    );
}


export default Home;