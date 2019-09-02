import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TodoList from "./containers";
import store from "./store";
console.log("store is", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById("root")
);
