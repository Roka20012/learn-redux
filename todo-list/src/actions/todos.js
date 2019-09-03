import { ADD_TODO, DELETE_TODO } from "../constants";

let id = 4;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: id++,
        content
    }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});
