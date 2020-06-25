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

export const removePlayer = (playerName) => {
    return {
        type: "REMOVE_PLAYER",
        playerName,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};