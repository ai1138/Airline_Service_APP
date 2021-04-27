import React from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import FormPage from './FormPage'

 
const home = () => {
    return (
	
 
       <div style = {{display: "flex", flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}}>
        
          <h1>Welcome Aboard!</h1> 
          <Button variant="contained" color="secondary" href= './FormPage'>Log In/Register</Button>
          <tr>At your convenience, anytime, anywhere</tr>
          <SearchPage/>
          <Table />
       </div>
    );
}


export default home;

