import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';



function Registerpage () 
{
   //toggles for buttons
   const [customerRegisterShown,setCustomerRegisterShown] = useState(false);
   const [bookingAgentRegisterShown,setBookingAgentRegisterShown] = useState(false);
   const [airlineRegisterShown,setAirlineRegisterShown] = useState(false);
   //form states
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");
   const [password, setPassWord] = useState("");
   const [airline, setAirLine] = useState("");

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
   const submitCustomerForm = () =>
   {
      if(firstName !== "")
         if(lastName !== "")
            if(email !== "")
               if(username !== "")
                  if(password !== "")
                  {
                     console.log("works")
                  }
                  else
                  {
                     console.log("didnt work")
                  }
     
   }
   const submitBAForm = () =>
   {
      console.log("submitted");
   }
   const submitAirLineForm = () =>
   {
      console.log("submitted");
   }
   const customerForm = (
      <form>
      <h1>Register </h1>
      <p>Enter your first  name:</p>
      <input
        type='text'
        name='name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Enter your last name:</p>
      <input
        type='text'
        name='name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='name'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Enter a username:</p>
      <input
        type='text'
        name='email'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
		<p>Enter your password:</p>
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <Button variant="contained" color="blue" onClick = {submitCustomerForm}>submit</Button>
      </form>
   );
   const baForm = (
      <form>
      <h1>Register </h1>
      <p>Enter your first  name:</p>
      <input
        type='text'
        name='name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Enter your last name:</p>
      <input
        type='text'
        name='name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='name'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Enter a username:</p>
      <input
        type='text'
        name='email'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
		<p>Enter your password:</p>
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <Button variant="contained" color="blue" onClick = {submitBAForm}>submit</Button>
      </form>
   );
   const airLineForm=  (
      <form>
      <h1>Register </h1>
      <p>Enter your first  name:</p>
      <input
        type='text'
        name='name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Enter your last name:</p>
      <input
        type='text'
        name='name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Enter which airline you work for:</p>
      <input
        type='text'
        name='name'
        value={airline}
        onChange={(e) => setAirLine(e.target.value)}
      />
      <p>Enter a username:</p>
      <input
        type='text'
        name='email'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
		<p>Enter your password:</p>
      <input
        type='text'
        name='password'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <Button variant="contained" color="blue" onClick = {submitAirLineForm}>submit</Button>
      </form>
   );
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
           
             <h1>Already Have An Account?!</h1> 
             <Button variant="contained" color="secondary" onClick = {CustomerRender}>Customer Registation</Button>
             {customerRegisterShown ? customerForm : null }
             <Button variant="contained" color="secondary" onClick = {BookingAgentRender}>Booking Agent Registration</Button>
             {bookingAgentRegisterShown ? baForm : null }
             <Button variant="contained" color="secondary" onClick = {AirlineRender}>Airline Staff Registration</Button>
             {airlineRegisterShown ? airLineForm : null }
          </div>
       );
}
   




export default Registerpage;
