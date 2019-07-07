// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import App from './app/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore, combineReducers, applyMiddleware } from 'redux';

// ############################### REDUCERS
const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
  }
  return state;
};

const userReducer = (
  state = {
    name: 'Max',
    age: 27
  },
  action
) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
  }
  return state;
};

// ############################### MIDLEWARE
const myLogger = store => next => action => {
  console.log('Logged Action', action);
  next(action);
};

// ############################### STORE
const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(myLogger)
);

// ############################### SUBSCRIBE
store.subscribe(() => {
  console.log('Store updated', store.getState());
});

// ############################### DISPATCH
store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'ADD',
  payload: 22
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 80
});

store.dispatch({
  type: 'SET_AGE',
  payload: 30
});
