import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import Home from "./Components/Home";
import PlayerInput from './Components/PlayerInput/PlayerInput';
import PlayerPlatform from './Components/PlayerPlatform';


const App =({
  player, 
  setPlayer,
  addPlayer,

}) => (
    <Router>
      <>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/select">
          <PlayerPlatform></PlayerPlatform>
        </Route>
      </>
    </Router>

  );

export default App;
