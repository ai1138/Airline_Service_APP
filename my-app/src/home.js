import React from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';


 
const home = () => {
    return (
	
 
       <div style = {{display: "flex", flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}}>
          <img src = {logo} alt = "Logo" height="200" width="200" />
          <h1>Welcome Aboard!</h1> 
          <Link variant="contained" color="secondary" to= '/lspage'>Log In/Register</Link>
          <tr>At your convenience, anytime, anywhere</tr>
          <SearchPage/>
       </div>
    );
}


export default home;

