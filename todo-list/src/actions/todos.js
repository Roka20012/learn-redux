import { ADD_TODO } from "../constants";

let id = 4;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: id++,
        content
    }
});
