// import React from 'react'
// import {render} from 'react-dom'
// import {BrowserRouter} from 'react-router-dom'
// import App from './components/app/App';
//
// render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// ), document.getElementById('root'));

import {createStore, combineReducers} from "redux";

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            let addResult = state.result + action.payload;
            return {
                ...state,
                result: addResult,
                lastValues: [...state.lastValues, action.payload]
            };
        case "SUBTRACT":
            let subtractResult = state.result - action.payload;
            return {
                ...state,
                result: subtractResult,
                lastValues: [...state.lastValues, action.payload]
            };
        default:
            return state;
    }
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            };
        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            };
        default:
            return state;
    }
};

const store = createStore(combineReducers({mathReducer, userReducer}));

// console.log(store.getState());

store.subscribe(() => {
    console.log("store updated", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 12
});

store.dispatch({
    type: "SUBTRACT",
    payload: 33
});

store.dispatch({
    type: "SET_AGE",
    payload: 31
});

store.dispatch({
    type: "SET_NAME",
    payload: "Karol"
});

