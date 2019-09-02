import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";

const logger = createLogger({});

const initialValue = {
    todos: [
        {
            id: 1,
            content: "Make sandwiches"
        },
        {
            id: 2,
            content: "Clean room"
        },
        {
            id: 3,
            content: "Buy car"
        }
    ]
};

export default createStore(rootReducer, initialValue, applyMiddleware(logger));
