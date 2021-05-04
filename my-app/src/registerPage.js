import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';



function Registerpage () 
{
   const [customerRegisterShown,setCustomerRegisterShown] = useState(false);
   const [bookingAgentRegisterShown,setBookingAgentRegisterShown] = useState(false);
   const [airlineRegisterShown,setAirlineRegisterShown] = useState(false);
   const CustomerRender = (props) => 
   {
      setCustomerRegisterShown(!customerRegisterShown);
   }
   const BookingAgentRender = (props) => 
   {
      setBookingAgentRegisterShown(!bookingAgentRegisterShown);
   }
   const AirlineRender = (props) => 
   {
      setAirlineRegisterShown(!airlineRegisterShown);
   }
   const customerForm = (
      <div>i work yay</div>
   );
 
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
           
             <h1>Already Have An Account?!</h1> 
             <tr>At your convenience, anytime, anywhere</tr>
             <Button variant="contained" color="secondary" onClick = {CustomerRender}>Customer Registation</Button>
             {customerRegisterShown ? customerForm : null }
             <Button variant="contained" color="secondary" onClick = {BookingAgentRender}>Booking Agent Registration</Button>
             <Button variant="contained" color="secondary" onClick = {AirlineRender}>Airline Staff Registration</Button>
          </div>
       );
}
   




export default Registerpage;
