import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import FormPage from './FormPage'


function Lspage () {

   const [customerLoginShown,setCustomerLoginShown] = useState(false);
   const [baLoginShown,setBaLoginShown] = useState(false);
   const [airlineLoginShown,setAirLineLoginShown] = useState(false);
   const CustomerRender = (props) => 
   {
      setCustomerLoginShown(!customerLoginShown);
   }
   const customerLogin =  
   (
      <form>
       Email:
      <input type="text" email="email" />
      Password
      <input type="text" password="password" />
      </form>

   );
   const bookingagentRender = () => {
      return (
         <form>
          Email:
         <input type="text" email="email" />
         Password
         <input type="text" password="password" />
         </form>
   
      )
   }
   const airlinestaffRender = () => {
      return (
         <form>
          Email:
         <input type="text" email="email" />
         Password
         <input type="text" password="password" />
         </form>
   
      )
   }
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
           
             <h1>Already Have An Account?!</h1> 
             <tr>At your convenience, anytime, anywhere</tr>
             <Button variant="contained" color="secondary" onClick = {CustomerRender}>Customer Log In</Button>
             {customerLoginShown ? customerLogin : null }
             <Button variant="contained" color="secondary" onClick = {bookingagentRender}>Booking Agent Log In</Button>
             <Button variant="contained" color="secondary" onClick = {airlinestaffRender}>Airline Staff Log In</Button>
             <Button variant="contained" color="secondary" href= './FormPage'>REGISTER</Button>
             {/* <SearchPage/>
             <Table /> */}
          </div>
       );
}
   




export default Lspage;

