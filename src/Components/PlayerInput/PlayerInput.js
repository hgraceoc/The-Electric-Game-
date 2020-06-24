import React, { Component } from "react";
import inital from "../../data/initial";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: ''
        };
        //store playerName input locally 

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ playerName: e.currentTarget.value })
    }

    handleSubmit(e) {
        const { playerName } = this.state;
        e.preventDefault();
        this.props.handleSubmit(playerName)
    }

    render() {
        const { players } = this.props;
        const { playerName } = this.state;
        //player inputs are stored in local state, but the players array we are accessing from the store 
        console.log(players)


        return (
            <>
                <div className="playerInputForm">

                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <h1 className="title">Name Your Players</h1>
                            <div className="formGroup">
                                <input
                                    onChange={this.handleChange}
                                    value={playerName}
                                    placeholder="#1">
                                </input>

                            </div>
                            <button
                                className="formButton"
                                type="submit">
                                Add Player</button>
                        </form>
                    </div>
                </div>
            </>
        )

    }
}

PlayerInput.defaultProps = {
    playerName: ''
}


export default PlayerInput;
