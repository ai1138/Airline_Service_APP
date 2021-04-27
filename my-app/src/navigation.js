import React from 'react'; 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/userhome">Userhome</NavLink>
          <NavLink to="/bookingagent">Bookingagent</NavLink>
          <NavLink to="/airlinestaff">Airlinestaff</NavLink>
		<NavLink to="/BookingAgentPage">BA Form Page</NavLink>
		  <NavLink to="/FormPage">TestRegister</NavLink>
		  <NavLink to="/lspage">LoginRegisterPage</NavLink>
       </div>
    );
}
 
export default Navigation;