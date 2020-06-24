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

export const splitTeams = () => {
    return {
        type: "SPLIT",
    }
}

export const reset = () => {
    return {
        type: "RESET",
    };
};