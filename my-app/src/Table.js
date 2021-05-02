import React, { useMemo, useState, useEffect } from "react"

const fetchURL = "http://localhost:5000/flights-table";
const getItems = () => fetch(fetchURL).then(res => res.json());

function Table()
{
  const [data,updateData] = useState();
  useEffect(() => {
    getItems().then(data => updateData(data));
  }, []);


  let itemsToRender;
  if (data) {
    itemsToRender = data.map(item => {
      console.log(item)
      return <tr key={item.flight_num}>
               <td> {item.flight_num} </td>
               <td> {item.statuses} </td>
               <td> {item.airport_arrival} </td>
               <td> {item.departure_airport} </td>
              </tr>
    });
  }
  return(
    <table>
      <tr>
        <td> flight_num </td>
        <td> statuses </td>
        <td> airport_arrival </td>
        <td> departure_airport </td>
      </tr>
      {itemsToRender}
    
    </table>
  )


}
export default Table;

