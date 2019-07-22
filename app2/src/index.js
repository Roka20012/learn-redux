import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import "./index.css";

const initialState = [
    'I am Rostik',
    'I am Tortik'
]

function playlist(state = initialState, action) {
    if (action.type === "ADD_TRACK") {
        return [...state, action.payload];
    }
    return state;
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// import { createStore } from "redux";

// function playlist(state = [], action) {
//     if (action.type === "ADD_TRACK") {
//         return [...state, action.payload];
//     }
//     return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelector(".addTrack");

// const trackInput = document.querySelector(".trackInput");
// const list = document.querySelector(".list");

// store.subscribe(() => {
//     console.log("subscribe", store.getState());
//     list.innerHTML = "";
//     trackInput.value = "";
//     store.getState().forEach(track => {
//         const li = document.createElement("li");
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });

// addTrackBtn.addEventListener("click", () => {
//     const trackName = document.querySelector(".trackInput").value;

//     console.log("trackname", trackName);
//     store.dispatch({ type: "ADD_TRACK", payload: trackName });
// });
