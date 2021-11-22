import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

//feeling reducer
const feeling = ( state = [], action ) =>{
    if( action.type === 'ADD_FEELING' ) {
        return action.payload;
    }else if (action.type ==='EMPTY_FEEDBACK' ) {
        return action.payload;
    }
    return state;
}
//understanding reducer
const understanding = ( state = [], action ) =>{
    if( action.type === 'ADD_UNDERSTANDING' ) {
        return action.payload;
    }else if (action.type ==='EMPTY_FEEDBACK' ) {
        return action.payload;
    }
    return state;
}
//support reducer
const support = ( state = [], action ) =>{
    if( action.type === 'ADD_SUPPORT' ) {
        return action.payload;
    }else if (action.type ==='EMPTY_FEEDBACK' ) {
        return action.payload;
    }
    return state;
}
//comments reducer
const comments = ( state = [], action ) =>{
    if( action.type === 'ADD_COMMENTS' ) {
        return action.payload;
    }else if (action.type ==='EMPTY_FEEDBACK' ) {
        return action.payload;
    }
    return state;
}

//create the store
const storeInstance = createStore (
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments
        }
    ),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
