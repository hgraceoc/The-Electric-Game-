import initial from "./initial";


const shuffle = (state) => {
    let team = state.players;
    return {
        ...state,
        players: [
            ...state.players.sort(() => Math.random() - 0.5)
        ]
    };
}


    //reducer to reset the form, when user clicks reset button
    const reset = (state) => {
        return {
            ...initial,
        }
    }

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
            case "SHUFFLE" : return shuffle(addPlayer(state,action))
            case "RESET" : return reset(state,action);
            default: return state;
        }
    }
    export default reducer;