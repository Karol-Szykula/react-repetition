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

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.value;
            break;
        case "SUBSTRACT":
            break;
        default:
            return state;
    }
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("store updated", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 10
});