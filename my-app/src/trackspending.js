import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Table from './Table'
import SearchPage from './SearchPage'
import {button} from "./button";
import Button from '@material-ui/core/Button';
import logo from './PngItem_61922.png';
import Home from './home'
import Navigation from './navigation';
import CustomerInfo from './CustomerInfo';
import {useHistory} from 'react-router-dom';
import RatingTable from './RatingTable';
import victory from "victory";
import {
    VictoryBar,
    VictoryChart,
} from "victory";

function Trackspending() {

    return(
        <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
          <img src = {logo} alt = "Logo" height="200" width="200" />
          <h1>Welcome Aboard, Track Spending!</h1> 
          <VictoryChart>
           <VictoryBar
            data={[
            { x: "January", y: 1234 },
            { x: "February", y: 2048 },
            { x: "March", y: 2600 },
            { x: "April", y: 9000 },
            ]}
            />
            </VictoryChart>

        
       </div>
    )
     


}

export default Trackspending;