import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import FormPage from './FormPage'


function registerpage () 
{
   const [customerRegisterShown,setCustomerRegisterShown] = useState(false);
 
   
   return (
      
    
          <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
           
             <h1>Already Have An Account?!</h1> 
             <tr>At your convenience, anytime, anywhere</tr>
             <Button variant="contained" color="secondary" href= './FormPage'>Customer Registation</Button>
             <Button variant="contained" color="secondary" href= './BAregister'>Booking Agent Registration</Button>
             <Button variant="contained" color="secondary" href= './ASregister'>Airline Staff Registration</Button>
             {/* <SearchPage/>
             <Table /> */}
          </div>
       );
}
   




export default registerpage;
