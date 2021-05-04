import React, { useMemo, useState, useEffect } from "react"



function Table(props)
{

  return(
    <div>
    {props.data && 
      <table>
        <tr>
          <td> flight_num </td>
          <td> statuses </td>
          <td> airport_arrival </td>
          <td> departure_airport </td>
        </tr>
        {props.data.map((item, index) => (
          <tr key={item.flight_num}>
             <td> {item.flight_num} </td>
             <td> {item.statuses} </td>
             <td> {item.airport_arrival} </td>
             <td> {item.departure_airport} </td>  
          </tr>
       ))}
      
      </table>
    }
    {/* {!props.data &&
      <h1> Loading </h1>
    } */}

    
    </div>
  )


}
export default Table;

