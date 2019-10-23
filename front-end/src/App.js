import React from 'react';

import './App.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"


import Home from './components/Home'
import Music from './components/Music'
import Books from './components/Books'
import Favorite from './components/Favorite'

class App extends React.Component {
  cons
  render(){
    return (
      <Router >
        <Home/>
        <div id="links">
          <nav>
            <ul>
              <li>
                <Link to={'/'} class="homeNav">Home</Link>
              </li>
              <li>
                <Link to={'/Music'} class="homeNav">Search Music</Link>
              </li>
              <li>
                <Link to={'/Books'} class="homeNav">Search Books</Link>
              </li>
              <li>
                <Link to={'/Favorite'} class="homeNav">Favourites</Link>
              </li>
            </ul>
          </nav> {/*the navbar*/}
          <Switch>
          <Route path='/Home' component={Home}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Books' component={Books}/>
            <Route path='/Favorite' component={Favorite}/>
          </Switch>
        </div> {/*link all the items in the navbar to the links*/}
      </Router>
    );
  }
}

export default App;
