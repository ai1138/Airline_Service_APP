import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';




function Registerpage () 
{
   //toggles for buttons
   const [customerRegisterShown,setCustomerRegisterShown] = useState(false);
   const [bookingAgentRegisterShown,setBookingAgentRegisterShown] = useState(false);
   const [airlineRegisterShown,setAirlineRegisterShown] = useState(false);
   const [errors,setErrors]  = useState(false);
   //form states
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");
   const [password, setPassWord] = useState("");
   const [airline, setAirLine] = useState("");
   const [dob, setDOB] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [form,setForm] = useState();

   const user =
   {
      "role" : "",
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "username" : username,
      "password" : password,
      "airline" : airline,
      "dob" : dob,
      "phoneNumber": phoneNumber

   };
   const alert = (
      <p>enter all info</p>
   )
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
      if(dob !== "")
         if(phoneNumber !== "")
            if(firstName !== "")
               if(lastName !== "")
                  if(email !== "")
                     if(username !== "")
                        if(password !== "")
                        {
                           user.role = "customer";
                           fetch('http://localhost:5000/register', {
                              method: 'POST',
                              body: JSON.stringify({ user }),
                              headers: { 'Content-Type': 'application/json' },
                           }).then(res => res.json()).then(json => setForm(json.user));
                           console.log(user);
                        }
     
   }
   const submitBAForm = () =>
   {
      if(phoneNumber !== "")
         if(dob !== "")
            if(firstName !== "")
               if(lastName !== "")
                  if(email !== "")
                     if(username !== "")
                        if(password !== "")
                        {
                           user.role = "bookingagent";
                           fetch('http://localhost:5000/register', {
                              method: 'POST',
                              body: JSON.stringify({ user }),
                              headers: { 'Content-Type': 'application/json' },
                           }).then(res => res.json()).then(json => setForm(json.user));
                           console.log(user);
                        }
   }
   const submitAirLineForm = () =>
   {
      if(dob !== "")
         if(phoneNumber !== "")
            if(airline !== "")
               if(firstName !== "")
                  if(lastName !== "")
                     if(email !== "")
                        if(username !== "")
                           if(password !== "")
                           {
                              user.role = "airline";
                              fetch('http://localhost:5000/register', {
                                 method: 'POST',
                                 body: JSON.stringify({ user }),
                                 headers: { 'Content-Type': 'application/json' },
                              }).then(res => res.json()).then(json => setForm(json.user));
                              console.log(user);
                           }
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
      <p>Enter your date of birth:</p>
      <input
        type='text'
        name='name'
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <p>Enter your phone number:</p>
      <input
        type='text'
        name='name'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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
      <p>Enter your date of birth:</p>
      <input
        type='text'
        name='name'
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <p>Enter your phone number:</p>
      <input
        type='text'
        name='name'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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
   const airLineForm =  (
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
      <p>Enter your date of birth:</p>
      <input
        type='text'
        name='name'
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <p>Enter your phone number:</p>
      <input
        type='text'
        name='name'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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
   return(
      
    
      <div style = {{display: "flex", flexDirection: "column",
       alignItems: "center",
       justifyContent: "center"}}>
         <img src = {logo} alt = "Logo" height="200" width="200" />
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
