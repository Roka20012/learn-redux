let mockApiData = [
    {
        id: 1,
        name: "I am Rostyk"
    },
    {
        id: 2,
        name: "I am Nazar"
    },
    {
        id: 3,
        name: "I am Petro"
    },
    {
        id: 4,
        name: "I am Roma"
    },
    {
        id: 5,
        name: "I am John"
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log("I got tracks");
        dispatch({ type: "FETCH_TRACKS_SUCCESS", payload: mockApiData });
    }, 2000);
};
