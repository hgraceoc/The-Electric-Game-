import { createStore, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";

import initial from "../data/initial";
import reducer from "../data/reducers";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initial,
  composeEnhancers(persistState())
);

export default store;