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
    VictoryPie,
    VictoryChart,
} from "victory";

function Revenue() {

    return(
        <div style = {{display: "flex", flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"}}>
          <img src = {logo} alt = "Logo" height="200" width="200" />
          <h1>REVENUE</h1> 
          <VictoryChart>
          <VictoryPie
            colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
             data={[
            { x: "direct sales", y: 1234 },
            { x: "indirect sales", y: 2048 },
            
  ]}
/>
            </VictoryChart>

        
       </div>
    )
     


}

export default Revenue;