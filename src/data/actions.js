export const addPlayer = (playerName) => {
    return {
        type: "ADD_PLAYER",
        playerName,
    };
};