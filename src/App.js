import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import Home from "./Components/Home";
import PlayerInput from "./Components/PlayerInput";


function App() {
  return (
    <Router>
      <>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/select">
          <PlayerInput></PlayerInput>
        </Route>
      </>
    </Router>

  );
}

export default App;
