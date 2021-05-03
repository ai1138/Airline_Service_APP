import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Userhome from './userhome';
import Bookingagent from './bookingagent';
import Navigation from './navigation';
import Airlinestaff from './airlinestaff'
import FormPage from './FormPage';
import BookingAgentFormPage from './BookingAgentFormPage';
import Lspage from './lspage';
import SearchBar from './SearchBar';


<BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/userhome" component={Userhome}/>
                <Route path="/bookingagent" component={Bookingagent}/>
                <Route path="/airlinestaff" component={Airlinestaff}/>
                <Route path="/FormPage" component={FormPage}/>
                <Route path= "/BookingAgentFormPage" component={BookingAgentFormPage}/>
                <Route path= "/lspage" component={Lspage}/>
                <Route path= "./SearchBar" component={SearchBar}/>
            </Switch>
        </div> 
</BrowserRouter>

ReactDOM.render(<App />, document.getElementById('root'))


