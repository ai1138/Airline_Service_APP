import React, { useMemo, useState, useEffect } from "react"



function RatingTable(props)
{

  return(
    <div>
    {props.data && 
      <table>
        <tr>
          <td> flight_num </td>
          <td> airline name </td>
          <td> airport arrival </td>
          <td> airport departure </td>
          <td> departure date and time </td>
          <td> arrival date and time </td>
          <td> rating</td>
          <td> comment</td>

        </tr>
        {props.data.map((item, index) => (
          <tr key={item.flight_num}>
             <td> {item.flight_num}</td>
             <td> {item.name} </td>
             <td> {item.airport_arrival} </td>
             <td> {item.departure_airport} </td> 
             <td> {item.departure_date_and_time} </td>
             <td> {item.arrival_date_and_time} </td>
             <td> {item.rate} </td>
             <td> {item.comments} </td>
          </tr>
       ))}
      
      </table>
    }
    

    
    </div>
  )


}
export default RatingTable;

