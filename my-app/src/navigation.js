import React from 'react'; 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/userhome">Userhome</NavLink>
          <NavLink to="/bookingagent">Bookingagent</NavLink>
          <NavLink to="/airlinestaff">Airlinestaff</NavLink>

       </div>
    );
}
 
export default Navigation;