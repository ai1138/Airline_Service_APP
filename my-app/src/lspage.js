import React, { useState } from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import FormPage from './FormPage'


function lspage () {

   const CustomerRender = (props) => {
      const [isPreviewShown, setPreviewShown] = useState(false);
         handlePreview=(e)=>{
            e.preventDefault();
 
            setPreviewShown(true); // Here we change state
         }
         console.log(1234)
         return(
            <form>
               <input name="email" type="text"/>
               <button type="submit" 
               onClick={props.handleSubmit}>
               Submit</button>
               {props.render&& 
                  <button type="submit" 
                  onClick={handlePreview}>
                     Preview
               </button>
               }
               {isPreviewShown && <Preview/>}
            </form>
     )
   }
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
             <Button variant="contained" color="secondary" onClick = {bookingagentRender}>Booking Agent Log In</Button>
             <Button variant="contained" color="secondary" onClick = {airlinestaffRender}>Airline Staff Log In</Button>
             <Button variant="contained" color="secondary" href= './FormPage'>REGISTER</Button>
             <SearchPage/>
             <Table />
          </div>
       );
}
   




export default lspage;

