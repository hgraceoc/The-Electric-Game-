import React from 'react';
import football from '../../src/imgs/football.svg';
import { Link } from "react-router-dom";


function Home() {

    return (
      <div className="App">
        <header className="home">
          <img src={football} className="logo" alt="logo" />
          
          <h1 className="homeTitle">Team Selector!</h1>
          <Link className="homeLink" to="/select">Name Your Players!</Link>
  
        </header>
      </div>
    );
  }
  
  export default Home;