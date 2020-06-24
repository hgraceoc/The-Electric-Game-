import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import Home from "./Components/Home";
import PlayerPlatform from "./Components/PlayerPlatform";
import PlayerInput from './Components/PlayerInput/PlayerInput';


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
