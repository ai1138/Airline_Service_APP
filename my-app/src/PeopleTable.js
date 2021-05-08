import React, { useMemo, useState, useEffect } from "react"



function PeopleTable(props)
{

  return(
    <div>
    {props.data && 
      <table>
        <tr>
          <td> First Name </td>
          <td> Last Name</td>
          <td> Money Earned </td>
          
        </tr>
        {props.data.map((item, index) => (
          <tr key={item.booking_agent_id}>
             <td> {item.first_name} </td>
             <td> {item.last_name} </td>
             <td> {item.comission} </td> 
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
export default PeopleTable;

