import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import decode from "jwt-decode";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import "semantic-ui-css/semantic.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import App from './App.jsx';
import UserReducer from "./components/reducers/UserReducer";
import * as serviceWorker from './serviceWorker';
import { userLoggedIn } from './components/actions/auth.js';

const rootReducer = combineReducers({UserReducer});
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)));

if (localStorage.AuthJWT) {
  const payload = decode(localStorage.AuthJWT);
  const user = {token: localStorage.AuthJWT,
  email: payload.email,
  confirmed: payload.confirmed
  };
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <Provider store = {store} >  
<BrowserRouter>
<Route component = {App} />
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
