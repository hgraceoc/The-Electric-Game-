export const addPlayer = (playerName) => {
    return {
        type: "ADD_PLAYER",
        playerName,
    };
};

export const shuffle = (playerName) => {
    return {
        type: "SHUFFLE",
        playerName,
    };
};

export const editPlayers = (playerName) => {
    return {
        type: "EDIT_PLAYERS",
        playerName,
    };
};

export const removePlayer = (index) => {
    return {
        type: "REMOVE_PLAYER",
        index: index,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};