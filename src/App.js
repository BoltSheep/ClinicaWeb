import React from 'react'
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
       <Switch>
          <Route path='/' exact />
        </Switch> 
      </Router>
    </>
  );
}

export default App;
//<header className="App-header">
//<img src={logo} className="App-logo" alt="logo" />
//<p>
//  Edit <code>src/App.js</code> and save to reload.
//</p>
//<a
//  className="App-link"
//  href="https://reactjs.org"
//  target="_blank"
//  rel="noopener noreferrer"
//>
//  Learn React
//</a>
//</header>