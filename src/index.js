import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from "redux";
// import { StoreContext } from "./context";
import allReducers from './Reducers';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logger from './middlewear/logger';
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
|| compose;


let store = createStore(allReducers, 
  composeEnhancers(applyMiddleware(thunk, logger))
  // .__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //  
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
