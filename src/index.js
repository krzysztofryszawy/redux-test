// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import App from './app/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      break;
    case 'SUBTRACT':
      state = state - action.payload;
      break;
    default:
  }
  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log('Store updated', store.getState());
});

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
