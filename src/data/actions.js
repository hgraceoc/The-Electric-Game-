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

export const reset = () => {
    return {
        type: "RESET",
    };
};