import React from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import FormPage from './FormPage'

 
const lspage = () => {
    return (
	
 
       <div style = {{display: "flex", flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}}>
        
          <h1>Already Have An Account?!</h1> 
		<form>
    	Email:
    <input type="text" email="email" />
		Password
		<input type="text" password="password" />
</form>
          <Button variant="contained" color="secondary" href= './FormPage'>Log In</Button>
          <tr>At your convenience, anytime, anywhere</tr>
          <SearchPage/>
          <Table />
       </div>
    );
}


export default lspage;

