import React, {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import home from './home';
import Userhome from './userhome';
import Bookingagent from './bookingagent';
import Navigation from './navigation';
import Airlinestaff from './airlinestaff'
import FormPage from './FormPage';
import BookingAgentFormPage from './BookingAgentFormPage';
import lspage from './lspage';
import registerpage from './main_register_page';
import ASRegister from './ASregister';
import BARegister from './BAregister';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
             <Route path="/" component={home} exact/>
             <Route path="/userhome" component={Userhome}/>
             <Route path="/bookingagent" component={Bookingagent}/>
             <Route path="/airlinestaff" component={Airlinestaff}/>
			 <Route path="/FormPage" component={FormPage}/>
			 <Route path= "/BookingAgentFormPage" component={BookingAgentFormPage}/>
	         <Route path= "/lspage" component={lspage}/>
			<Route path= "/main_register_page" component={registerpage}/>
			<Route path= "/ASregister" component={ASRegister}/>
			<Route path= "/BAregister" component={BARegister}/>
           </Switch>
      </div>
      </BrowserRouter>
    )
  }
}





export default App;
