import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import registerpage from './registerPage';
import logo from './PngItem_61922.png';
import {useHistory} from 'react-router-dom'

function Lspage () {

   const [customerLoginShown,setCustomerLoginShown] = useState(false);
   const [baLoginShown,setBaLoginShown] = useState(false);
   const [airlineLoginShown,setAirLineLoginShown] = useState(false);
   const [username, setUserName] = useState("");
   const [password, setPassWord] = useState("");
   const history = useHistory();
   const user = {"username":username,"password":password,"role":""};
   const CustomerRender = (props) => 
   {
      
      setCustomerLoginShown(!customerLoginShown);
      setBaLoginShown(false);
      setAirLineLoginShown(false);
      console.log("customer")
      user.role = "customer";
   }
   const BookingRender = (props) => {
	   setBaLoginShown(!baLoginShown);
      setCustomerLoginShown(false);
      setAirLineLoginShown(false);
      console.log("ba");
      user.role = "bookingagent";
   }
   const AirlineRender = (props) => {
	   setAirLineLoginShown(!airlineLoginShown);
      setCustomerLoginShown(false);
      setBaLoginShown(false);
      console.log("airline");
      user.role = "airline";
   }
   const submitCustomerForm = () =>
   {
      if(username !=="")
         if(password !== "")
         {
            user.role = "customer";
            fetch('http://localhost:5000/login', {
               method: 'POST',
               body: JSON.stringify({ user }),
               headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               console.log(data[0]["customer_id"])
               sessionStorage.setItem("token",data[0]["customer_id"]);
               sessionStorage.setItem("role","customer");
               history.push("/")
               
            });

         }
         else
         {
            console.log("naw")
         }

   }
   const submitBookingAgentForm = () =>
   {
      if(username !=="")
         if(password !== "")
         {
            user.role = "bookingagent";
            fetch('http://localhost:5000/login', {
               method: 'POST',
               body: JSON.stringify({ user }),
               headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               console.log(data[0]["booking_agent_id"])
               sessionStorage.setItem("token",data[0]["booking_agent_id"]);
               sessionStorage.setItem("role","bookingagent");
               history.push("/")
            });
         }
         else
         {
            console.log("naw")
         }
   }
   const submitAirLineForm = () =>
   {
      if(username !=="")
         if(password !== "")
         {
            user.role = "airline";
            fetch('http://localhost:5000/login', {
               method: 'POST',
               body: JSON.stringify({ user }),
               headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               console.log(data[0]["airline_id"])
               sessionStorage.setItem("token",data[0]["booking_agent_id"]);
               sessionStorage.setItem("role","airline");
               history.push("/")
            });
         }
         else
         {
            console.log("naw")
         }
   }
   const customerLogin =  
   (

      <div>
         <form>
            <p>Username:</p>
            <input
            type='text'
            name='email'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p>Password:</p>
            <input
            type='text'
            name='password'
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            />
         </form>
         <Button variant="contained" color="blue" onClick = {submitCustomerForm}>submit</Button>
      </div>
      

   );
  const bookingagentLogin =  
   (
      <div>
         <form>

            <p>Username:</p>
            <input
            type='text'
            name='email'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p>Password:</p>
            <input
            type='text'
            name='password'
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            />
         </form>
         <Button variant="contained" color="blue" onClick = {submitBookingAgentForm}>submit</Button>
      </div>
   );
  const airlinestaffLogin =  
   (
      <div>
         <form>
            <p>Username:</p>
            <input
            type='text'
            name='email'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p>Password:</p>
            <input
            type='text'
            name='password'
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            />
         </form>
         <Button variant="contained" color="blue" onClick = {submitAirLineForm}>submit</Button>
      </div>
   

   );
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
            <img src = {logo} alt = "Logo" height="200" width="200" />
             <h1>Already Have An Account?! Click the type you need!</h1> 
             <tr>At your convenience, anytime, anywhere</tr>
             <div style = {{display: 'flex', direction: 'row', width: '800px', alignItems: 'center'}}>
                { <div style = {{display: 'flex', width: `${customerLoginShown || baLoginShown || airlineLoginShown ? '50%' : '100%'}`,  alignItems: 'center', flexDirection: 'column'}}>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {CustomerRender}>Customer </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {BookingRender}>Booking Agent </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" onClick = {AirlineRender}>Airline Staff </Button>
                  <Button style = {{marginTop: '10px', width: '50%'}} variant="contained" color="secondary" href= './registerPage'>Register!</Button>
                </div> }
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

