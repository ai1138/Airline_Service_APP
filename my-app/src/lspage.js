import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import registerpage from './registerPage'


function Lspage () {

   const [customerLoginShown,setCustomerLoginShown] = useState(false);
   const [baLoginShown,setBaLoginShown] = useState(false);
   const [airlineLoginShown,setAirLineLoginShown] = useState(false);
   const CustomerRender = (props) => 
   {
      setCustomerLoginShown(!customerLoginShown);
   }
   const BookingRender = (props) => {
	   setBaLoginShown(!baLoginShown);
   }
   const AirlineRender = (props) => {
	   setAirLineLoginShown(!airlineLoginShown);
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
  const bookingagentLogin =  
   (
      <form>
       Email:
      <input type="text" email="email" />
      Password
      <input type="text" password="password" />
      </form>

   );
  const airlinestaffLogin =  
   (
      <form>
       Email:
      <input type="text" email="email" />
      Password
      <input type="text" password="password" />
      </form>
   

   );
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
           
             <h1>Already Have An Account?! Click the type you need!</h1> 
             <tr>At your convenience, anytime, anywhere</tr>
             <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
                <div style = {{display: 'flex', width: `${customerLoginShown || baLoginShown || airlineLoginShown ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {CustomerRender}>Customer </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {BookingRender}>Booking Agent </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {AirlineRender}>Airline Staff </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" href= './registerPage'>Register!</Button>
                </div>
                <div style = {{display: 'flex', width: `${customerLoginShown || baLoginShown || airlineLoginShown ? '50%' : '0px'}`, alignItems: 'center'}}>
                  {customerLoginShown ? customerLogin : null }
                  {baLoginShown ? bookingagentLogin : null }
                  {airlineLoginShown ? airlinestaffLogin : null }
                </div>


             </div>

             
             {/* <SearchPage/>
             <Table /> */}
          </div>
       );
}
   




export default Lspage;

