import React, { useEffect, useState } from 'react';
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
   const [addy, setAddy] = useState("");
   const [form,setForm] = useState();
   const[street, setStreet] = useState("");
   const[city, setCity] = useState("");
   const [state, setState] = useState("");
   const [passportNum, setPassportNum] = useState("");
   const [passportExpiration, setPassportExpiration] = useState("");
   const [passportCountry, setPassportCountry] = useState("");


   const user =
   {
      "id" : "",
      "role" : "",
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "username" : username,
      "password" : password,
      "airline" : airline,
      "dob" : dob,
      "phoneNumber": phoneNumber,
<<<<<<< HEAD
      "address":addy
=======
      "street": street,
      "city":city,
      "state":state,
      "passport num": passportNum,
      "passport expiration": passportExpiration,
      "passport country": passportCountry
>>>>>>> 588ae321005ffb5fc4e9091f5f5821acd0a57b9c

   };
   const alert = (
      <p>enter all info</p>
   )
   const CustomerRender = (props) => 
   {
      setCustomerRegisterShown(!customerRegisterShown);
      setBookingAgentRegisterShown(false);
      setAirlineRegisterShown(false);
   }
   const BookingAgentRender = (props) => 
   {
      setBookingAgentRegisterShown(!bookingAgentRegisterShown);
      setCustomerRegisterShown(false);
      setAirlineRegisterShown(false);
   }
   const AirlineRender = (props) => 
   {
      setAirlineRegisterShown(!airlineRegisterShown);
      setCustomerRegisterShown(false);
      setBookingAgentRegisterShown(false);

   }
   const submitCustomerForm = () =>
   {
      if(addy !== "")
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
      <p>Enter your address:</p>
      <input
        type='text'
        name='name'
        value={addy}
        onChange={(e) => setAddy(e.target.value)}
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
      <p>Enter your building number:</p>
      <input
        type='text'
        name='building num'
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
      />
      <p>Enter your street:</p>
      <input
        type='text'
        name='street'
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <p>Enter your city:</p>
      <input
        type='text'
        name='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <p>Enter your state:</p>
      <input
        type='text'
        name='state'
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <p>Enter your passport number:</p>
      <input
        type='text'
        name='passport num'
        value={passportNum}
        onChange={(e) => setPassportNum(e.target.value)}
      />
      <p>Enter your passport  date:</p>
      <input
        type='text'
        name='passport expiration'
        value={passportExpiration}
        onChange={(e) => setPassportExpiration(e.target.value)}
      />
      <p>Enter your passport country:</p>
      <input
        type='text'
        name='passport country'
        value={passportCountry}
        onChange={(e) => setPassportCountry(e.target.value)}
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
      <p>Enter which airline ID:</p>
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
   const errorMessage = (
      <h1>This user exists please try something else</h1>
   )
   return(
      
    
      <div style = {{display: "flex", flexDirection: "column",
       alignItems: "center",
       justifyContent: "center"}}>
         <img src = {logo} alt = "Logo" height="200" width="200" />
         <h1>Already Have An Account?!</h1> 

         <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
            <div style = {{display: 'flex', width: `${customerRegisterShown || bookingAgentRegisterShown || airlineRegisterShown ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
               <Button style = {{marginTop: '10px', width:'50%'}} variant="contained" color="secondary" onClick = {CustomerRender}>Customer Registation</Button>
               <Button style = {{marginTop: '10px', width:'50%'}} variant="contained" color="secondary" onClick = {BookingAgentRender}>Booking Agent Registration</Button>
               <Button style = {{marginTop: '10px', width:'50%'}} variant="contained" color="secondary" onClick = {AirlineRender}>Airline Staff Registration</Button>
            </div>
            <div style = {{display: 'flex', width: `${customerRegisterShown || bookingAgentRegisterShown || airlineRegisterShown ? '50%' : '0px'}`, alignItems: 'center'}}>
               {customerRegisterShown ? customerForm : null }
               {bookingAgentRegisterShown ? baForm : null }
               {airlineRegisterShown ? airLineForm : null }

            </div>
         </div>

      </div>
   );
}
 
   




export default Registerpage;
