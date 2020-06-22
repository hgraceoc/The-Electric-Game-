const addPlayerReducer = (state, { players }) => {
    return {
        ...state,
        players,
        loaded: true,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        default: return state;
    }
}

export default reducer;