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

import {createStore} from "redux";

const initialState = {
    result: 1,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let addResult = state.result + action.payload;
            return {
                ...state,
                result: addResult
            };
        case "SUBTRACT":
            let subtractResult = state.result - action.payload;
            return {
                ...state,
                result: subtractResult
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

// console.log(store.getState());

store.subscribe(() => {
    console.log("store updated", store.getState().result)
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "ADD",
    payload: 45
});

store.dispatch({
    type: "SUBTRACT",
    payload: 33
});


