import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
//making a store for the redux uses and pass reducer
const store = createStore(rootReducer);


//wrappe the app with the provider and pass the store in it


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
