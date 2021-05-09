import React, { useMemo, useState, useEffect } from "react"



function ViewFlightsBA(props)
{

  return(
    <div>
    {props.data && 
      <table>
        <tr>
          <td> flight_num </td>
          <td> Air Line </td>
          <td> airport_arrival </td>
          <td> departure_airport </td>
          <td> customer email address </td>
        </tr>
        {props.data.map((item, index) => (
          <tr key={item.flight_num}>
             <td> {item.flight_num} </td>
             <td> {item.name}</td>
             <td> {item.airport_arrival} </td>
             <td> {item.departure_airport} </td>  
             <td> {item.customer_email_address} </td> 
          </tr>
       ))}
      
      </table>
    }

    
    </div>
  )


}
export default ViewFlightsBA;