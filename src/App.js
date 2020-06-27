import React from 'react';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';

import Home from "./Components/Home";
import PlayerPlatform from './Components/PlayerPlatform';


const App =({

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
