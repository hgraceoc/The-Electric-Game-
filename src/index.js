import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from "./data/store";

import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
      addPlayer={() => store.dispatch({ type: "ADD_PLAYER" })}
      editPlayers={() => store.dispatch({ type: "EDIT_PLAYERS" })}
      reset={() => store.dispatch({ type: "RESET" })}
      shuffle={() => store.dispatch({ type: "SHUFFLE" })}
      removePlayer={() => store.dispatch({ type: "REMOVE_PLAYER" })}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
