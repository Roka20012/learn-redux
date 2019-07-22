const initialState = "";

export default function filterTracks(state = initialState, action) {
    if (action.type === "FIND_TRACK") {
        console.log(action);
        return action.payload;
    }
    return state;
}
