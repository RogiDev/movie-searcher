import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter as Router, routerReducer,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBro'
import {Provider} from 'react-redux';
import { createStore , applyMiddleware, compose,combineReducers} from 'redux';
import movieReducer from './store/reducer.js';
import thunk from 'redux-thunk';




const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(movieReducer,composeEnhancers(applyMiddleware(thunk)));



const app = (
  <Provider store={store}>
    <BrowserRouter base='/'>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
