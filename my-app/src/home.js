import React from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
 
const home = () => {
    return (
       <div style = {{display: "flex", flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}}>
        
          <h1>Welcome Aboard!</h1>  
          <button>Log In/Register</button>
          <tr>At your convenience, anytime, anywhere</tr>
          <SearchPage/>
          <Table />
       </div>
    );
}
 
export default home;

