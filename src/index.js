import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";

import thunk from "redux-thunk";

import store from "./data/store";
import initial from "../src/data/initial";
import reducer from "../src/data/reducers";

import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
      addPlayer={() => store.dispatch({ type: "ADD_PLAYER" })}
      reset={() => store.dispatch({ type: "RESET" })}
      shuffle={() => store.dispatch({ type: "SHUFFLE" })}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
