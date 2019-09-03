import { ADD_TODO, DELETE_TODO } from "../constants";

export function todos(state = [], { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case DELETE_TODO:
            return state.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
}
