import React, {Component} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import home from './home';
import Userhome from './userhome';
import Bookingagent from './bookingagent';
import Navigation from './navigation';
import Airlinestaff from './airlinestaff'
import lspage from './lspage';
import registerpage from './registerPage';


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
             <Route path= "/lspage" component={lspage}/>
             <Route path= "/registerPage" component={registerpage}/>
       </Switch>
      </div>
      </BrowserRouter>
    )
  }
}





export default App;
