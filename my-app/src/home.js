import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import FlightManagement from './FlightManagement';
import CustomerPortal from './CustomerPortal';
import BookingAgentPort from './BookingAgentPort';


 
function Home()
{     //make loginInfo be either customer,bookingagent or airline and render the page according to state 
      //if loginInfo is "" that means no one loged in
   const [noLogin,setNoLogin] = useState(false);
   const [userLogin, setUserLogin] = useState(false);
   const [bookingAgentLogin, setBookingAgentLogin] = useState(false);
   const [airLineLogin, setAirLineLogin] = useState(false);
   const start = () =>{

      const roles  = (sessionStorage.getItem("role"))
      console.log(roles)
      if(roles == "customer")
      {
         userLoginRender()
      }
      else if(roles == "bookingagent")
      {
         bookingAgentLoginRender()
      }
      else if(roles == "airline")
      {
         airLineLoginRender()
      }
      else
      {
         noLoginRender()
      }
   }
   const noLoginRender = () =>
   {
      setNoLogin(!noLogin);
      setUserLogin(false);
      setBookingAgentLogin(false);
      setAirLineLogin(false);
      console.log(sessionStorage.getItem("token"))
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
       <div style = {{display: "flex", flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"}}>
        <img src = {logo} alt = "Logo" height="200" width="200" />
        <h1>Welcome Aboard!</h1> 
        <Link variant="contained" color="secondary" to= '/CustomerPortal'>Customer Portal</Link>
        <tr>At your convenience, anytime, anywhere</tr>
        <SearchPage/>
     </div>
   )
    const baPage = (
      <div style = {{display: "flex", flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"}}>
        <img src = {logo} alt = "Logo" height="200" width="200" />
        <h1>Welcome Aboard!</h1> 
        <Link variant="contained" color="secondary" to= '/BookingAgentPort'>Booking Agent Portal</Link>
        <tr>At your convenience, anytime, anywhere</tr>
        <SearchPage/>
	</div>
   );
   
   const airPage = (
      <div style = {{display: "flex", flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"}}>
        <img src = {logo} alt = "Logo" height="200" width="200" />
        <h1>Welcome Aboard!</h1> 
        <Link variant="contained" color="secondary" to= '/FlightManagement'>Flight Management System</Link>
        <tr>At your convenience, anytime, anywhere</tr>
        <SearchPage/>
        
     </div>
      
   )

   return (
      <div>
         <Button style = {{marginTop: '5px', width: '5%'}} variant="contained" color="secondary" onClick = {start}>start </Button>
            {noLogin ? defaultPage : null }
            {userLogin ? cusPage : null }
            {bookingAgentLogin ? baPage : null }
            {airLineLogin ? airPage : null }
      </div>
      
    );
}


export default Home;