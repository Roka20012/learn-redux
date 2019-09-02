import { ADD_TODO } from "../constants";

export function todos(state = [], { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        default:
            return state;
    }
}
