import React, { Component } from 'react';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp'
import Translations from './pages/Translations';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Translations" component={Translations} />
         
         
        </Switch>
      
  );
}

export default App;
