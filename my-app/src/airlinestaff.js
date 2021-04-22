import React from 'react';
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
 
const airlinestaff = () => {
    return (
        <div style = {{display: "flex", flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"}}>
          <h1>Welcome Aboard!(this is where the airline name should be)</h1>  
          <button>Log Out</button>
          <tr>At your convenience, anytime, anywhere</tr>
          <button>Add New Airplane</button>
          <button>Create New Flight</button>
          <button>Update Flight Status</button>
       </div>
    );
}
 
export default airlinestaff;