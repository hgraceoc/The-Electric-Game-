import React, { Component } from "react";
import inital from "../../data/initial";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            submitted: false,
        };
        //store playerName input locally 

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSubmitTeams = this.handleSubmitTeams.bind(this);
    }

    handleChange(e) {
        this.setState({ playerName: e.currentTarget.value })
    }

    handleSubmit(e) {
        const { playerName } = this.state;
        e.preventDefault();
        this.props.handleSubmit(playerName)
        this.setState({ playerName: "" })
    }

    handleSubmitTeams(e) {
        const { playerName } = this.state;
        e.preventDefault();
        this.setState({ submitted: true })

    }

    render() {
        const { players } = this.props;
        const { playerName } = this.state;
        const { submitted } = this.state;
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
                                    placeholder="Enter Player Name.."
                                    required>
                                </input>

                            </div>
                            <button
                                className="formButton"
                                type="submit">
                                Add Player</button>
                        </form>
                        <ul className="playerList">
                            {players.map((player, index) => 
                                <li
                                    className="playerListItem">
                                    <label>Player{ index + 1 }:  </label>
                                    {player}   
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="submitTeamButtonContainer">
                        <button
                            onClick={this.handleSubmitTeams}
                            className="formButton submitTeamButton"
                            type="submit">
                            Pick My Teams!</button>
                    </div>
                </div>
            { submitted ? (
                <div>
                    <table className="teamTable">
                        <thead>
                            <tr>
                                <th className="title">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player) => (
                                <tr>{player}</tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : null }
            </>
        )

    }
}

PlayerInput.defaultProps = {
    playerName: ''
}


export default PlayerInput;
