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
                            value=""
                            placeholder="#1">
                        </input>

                        <input
                            type="text"
                            class="input"
                            value=""
                            placeholder="#2">
                        </input>

                        <input
                            type="text"
                            class="input"
                            value=""
                            placeholder="#3">
                        </input>

                        <input
                            type="text"
                            class="input"
                            value=""
                            placeholder="#4">
                        </input>

                        <input
                            type="text"
                            class="input"
                            value=""
                            placeholder="#5">
                        </input>

                        <input
                            type="text"
                            class="input"
                            value=""
                            placeholder="#6">
                        </input>
                    </div>
                    <button className="formButton">Pick My Teams</button>
                </form>
            </div>
        </div>
    )
}

export default PlayerInput;
