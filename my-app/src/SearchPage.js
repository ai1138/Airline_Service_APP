import React, { useState, useEffect } from 'react';
import Table from './Table'
import SearchBar from './SearchBar'


const SearchPage = (props) => 
{
  
  const fetchURL = "http://localhost:5000/flights-table";
  const getItems = () => fetch(fetchURL).then(res => res.json()).catch((error) => console.log(error));
  const [data, updateData] = useState('');
  useEffect(() => {
    getItems().then(data => updateData(data));
  }, []);

  const test = (text) => {
    getItems().then(data => {
      
      if(text == "")
      {
        updateData(data);

      }
      else
      {
        let sorted = []
        data.map((item) => {
          if(item.airport_arrival.includes(text)) //||item.departure_airport.includes(text))
          {
            sorted.push(item);

          }
        })
        updateData(sorted);

      }
    });


  }

  return(
    <div>
      <Table data = {data}/>
      <SearchBar callBack = {test}></SearchBar>
    </div>
    

  );
  
  

  
}

export default SearchPage