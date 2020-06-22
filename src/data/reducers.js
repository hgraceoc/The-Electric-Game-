const addPlayer = (state,{ player }) => ({ ...state, player: player });

//next, store players in player array

//add reducer to randomise player names 
// randomiseReducer(addPlayerReducer)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;

        
    }
}
export default reducer;