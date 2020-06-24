import initial from "./initial";

//reducer to reset the form, when user clicks reset button
const reset = (state) => {
    return {
        ...initial,
    }
}

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

//function to shuffle teams - call function on the data returned when the form is submitted 
let shuffle = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players.sort(() => Math.random() - 0.5),
            action.players,
        ]
    }
}

//once teams are shuffled, split them in half!
let splitTeams = (state, action) => {
    let players = state.players;
    let team1 = players.filter((_, index) => index < players.length % 2 === 0)
    let team2 = players.filter((_, index) => index > players.length % 2 === 0)

    return {
        ...state, 
        teamOne: [ 
            ...state.teamOne,
            team1,
            action.teamOne,
        ]
        ,
        teamTwo: [
            ...state.teamTwo,
            team2,
            action.teamTwo
        ]
    }
}

// let splitTeams = (state) => {
//     let players = state.players;
//     return {
//         ...state,
//         teamOne: [
//             state.players.filter((_, index) => index < players.length % 2 === 0)
//         ],

//         teamTwo: [
//             state.players.filter((_, index) => index < players.length % 2 === 0)
//         ],

//     }
// }


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "SHUFFLE": return shuffle(state, action);
        case "SPLIT": return splitTeams(state, action);
        case "RESET": return reset(state, action);
        default: return state;
    }
}
export default reducer;