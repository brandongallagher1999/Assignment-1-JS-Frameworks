import './css/App.css';
import React, { useState, useEffect} from 'react';
import NavBar from "./modules/NavBar";
import 'bulma/css/bulma.css';
import Profile from "./modules/Profile";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {



  return (

    <BrowserRouter>
      <Switch>
        <Route path="/:reqName" component={Profile}/>
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
