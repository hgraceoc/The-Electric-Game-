const addPlayer = (state, { players }) => {
    return {
        ...state,
        players,
        loaded: true,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;
    }
}

export default reducer;