export const addPlayer = (playerName) => {
    return {
        type: "ADD_PLAYER",
        playerName,
    };
};

export const pickTeams = (playerName) => {
    return {
        type: "PICK_TEAMS",
        playerName,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};