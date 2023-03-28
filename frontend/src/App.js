import React from 'react';
import Home from './pages/Home';
import './App.css';
import Signup from './pages/Signup'
import Translations from './pages/login';
import login from './pages/login';
import {
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" component={Signup} />
            <Route path="/login" component={login} />

          <Route path="/Translations" component={Translations} />
         
         
        </Switch>
      
  );
}

export default App;
