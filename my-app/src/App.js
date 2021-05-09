import React, {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import home from './home';
import Navigation from './navigation';
import lspage from './lspage';
import registerpage from './registerPage';
import FlightManagement from './FlightManagement';
import CustomerInfo from './CustomerInfo';
import CustomerPortal from './CustomerPortal';
import SearchPage from './SearchPage';
import Table from "./Table";
import BookingAgentPort from "./BookingAgentPort";
import Trackspending from "./trackspending";
import TopCust from "./TopCust";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
             <Route path="/" component={home} exact/>
             <Route path= "/lspage" component={lspage}/>
             <Route path= "/registerPage" component={registerpage}/>
             <Route path= "/FlightManagement" component={FlightManagement}/>
			 <Route path= "/CustomerPortal" component={CustomerPortal}/>
       <Route path = "/CustomerInfo" component = {CustomerInfo}/>
			<Route path= "/SearchPage" component={SearchPage}/>
			<Route path= "/Table" component={Table}/>
			<Route path= "/BookingAgentPort" component= {BookingAgentPort}/>
      <Route path = "/trackspending" component = {Trackspending}/>
       <Route path = "/TopCust" component = {TopCust}/>
       </Switch>
      </div>
      </BrowserRouter>
    )
  }
}





export default App;
