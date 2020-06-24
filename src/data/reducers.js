import initial from "./initial";

const addPlayer = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players,
            action.playerName,
        ]
    }
}

//add reducer function to randomise player names 
// randomise(addPlayer)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;

        
    }
}
export default reducer;