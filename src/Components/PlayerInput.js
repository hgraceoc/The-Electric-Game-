import React from "react";

function PlayerInput() {

    return (

        <div className="playerInputForm">

            <div className="form">
                <form>
                    <h1 className="formTitle">Name Your Players</h1>
                    <div className="formGroup">
                        <input 
                        type="text" 
                        class="input"
                        value="">
                        </input>
                        <input type="text" class="input"></input>
                        <input type="text" class="input"></input>
                    </div>
                    <button className="formButton">Pick My Team</button>
                </form>
            </div>
        </div>
    )
}

export default PlayerInput;
