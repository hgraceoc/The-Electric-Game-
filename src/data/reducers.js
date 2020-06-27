import initial from "./initial";

//add new player input to the store
const addPlayer = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players,
            action.playerName,
        ]
    }
}

const editPlayers = (state) =>  { 
    return  { 
      submitted: false,
    } 
  };

const removePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((_, i) => i !== index)
});


//reducer to reset the form, when user clicks reset button
const reset = (state) => {
    return {
        ...initial,
    }
}

//helper function to shuffle teams - call function on the data returned when the form is submitted 
let shuffle = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players.sort(() => Math.random() - 0.5),
            action.players,
        ]
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "SHUFFLE": return shuffle(state, action);
        case "REMOVE_PLAYER": return removePlayer(state,action);
        case "EDIT_PLAYERS": return editPlayers(state,action);
        case "RESET": return reset(state, action);
        default: return state;
    }
}
export default reducer;