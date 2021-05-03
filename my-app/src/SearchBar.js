import React, { useState, useEffect } from 'react';
const SearchBar = ({callBack}) => {
  const [keyword,setKeyword] = useState("");
  const BarStyling = {width:"40rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div>
      <input 
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search here by city or airport name"}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick = {() =>{callBack(keyword)
            setKeyword("")
      }}>enter to search or reset table</button>
    </div>
    
  );
}


export default SearchBar