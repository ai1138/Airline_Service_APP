import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Lspage from './lspage';
import SearchBar from './SearchBar';
import FlightManagement from './FlightManagement'


<BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path= "/lspage" component={Lspage}/>
                <Route path= "./SearchBar" component={SearchBar}/>
                <Route path= './FlightManagement' component={FlightManagement}/>
            </Switch>
        </div> 
</BrowserRouter>

ReactDOM.render(<App />, document.getElementById('root'))


