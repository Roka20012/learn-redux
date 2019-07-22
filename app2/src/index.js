import { createStore } from "redux";

function playlist(state = [], action) {
    if (action.type === "ADD_TRACK") {
        return [...state, action.payload];
    }
    return state;
}

const store = createStore(playlist);

console.log(store.getState());

store.subscribe(() => {
    console.log("subsctibe", store.getState());
});

store.dispatch({ type: "ADD_TRACK", payload: "I am Rostik" });
store.dispatch({ type: "ADD_TRACK", payload: "I am Tortik" });
