import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

//feedback reducer
const feedback = ( state = [], action ) =>{
    console.log( `Hello from the store reducer! Action type:`, action.type )
    console.log( `Payload is:`, action.payload );


    if( action.type === 'SET_FEELINGS' ) {
        return[...state, action.payload ];
    }else if ( action.type === 'SET_UNDERSTANDING' ) {
        return[ ...state, action.payload ];
    } else if ( action.type === 'SET_SUPPORT' ) {
        return[ ...state, action.payload ];
    } else if ( action.type === 'SET_COMMENTS' ) {
        return [ ...state, action.payload ];
    }
    console.log( `State is:`, state );
    return state;
}

//create the store
const storeInstance = createStore (
    combineReducers(
        {
            feedback
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
