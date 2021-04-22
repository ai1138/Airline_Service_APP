
import React from 'react';

const SearchBar2 = ({keyword,setKeyword}) => {
  const BarStyling = {width:"40rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search here by airline name, flight number, and arrival and departure dates"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}


export default SearchBar2