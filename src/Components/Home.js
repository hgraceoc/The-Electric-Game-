import React from 'react';
import ball from '../../src/imgs/ball.svg';
import { Link } from "react-router-dom";


function Home() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={ball} className="App-logo" alt="logo" />
          
          <p>I hear that people call it the Electric Game</p>
          <Link className="homeLink" to="/select">Name Your Players!</Link>
  
        </header>
      </div>
    );
  }
  
  export default Home;