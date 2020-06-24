import React, { Component } from "react";
import inital from "../../data/initial";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            submitted: false,
            // teamOne: [],
            // teamTwo: [],
        };
        //store playerName input locally 

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSubmitTeams = this.handleSubmitTeams.bind(this);

        this.handleReset = this.handleReset.bind(this);
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
        const { players } = this.state;
        // const { teamOne } = this.state;
        // const { teamTwo } = this.state;
        e.preventDefault();
        this.setState({ submitted: true });
        this.props.handleSubmitTeams(players)
        // this.props.handleSubmitTeams(teamOne)
        // this.props.handleSubmitTeams(teamTwo)
    }

    handleReset(e) {
        this.props.handleReset()
        this.setState({ submitted: false })
    }

    render() {
        const { players } = this.props;
        const { playerName } = this.state;
        const { submitted } = this.state;
        const { teamOne } = this.props;
        const { teamTwo } = this.props;


        //player inputs are stored in local state, but the players array we are accessing from the store 
        console.log(players)


        return (
            <>
                {!submitted ? (
                    <div className="playerInputForm">

                        <div className="form">
                            <form onSubmit={ this.handleSubmit }>
                                <h1 className="title">Name Your Players</h1>
                                <p>Enter 10 Player Names & Then Click <strong>'Randomise Teams'</strong> To Randomly Generate Two Teams..</p>
                                <div className="formGroup">
                                    <input
                                        onChange={ this.handleChange }
                                        value={ playerName }
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
                                        <label>Player{ index + 1 } :  </label>
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
                                Randomise Teams!</button>
                        </div>
                    </div>
                ) : null}

                {submitted ? (
                    <>
                    <div class="teamTables">
                        <table className="teamTable">
                            <thead>
                                <tr>
                                    <th className="title">Team One</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamOne.map((player, index) => (
                                    <tr>Player{ index + 1} : { player }</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table className="teamTable">
                            <thead>
                                <tr>
                                    <th className="title">Team Two</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamTwo.map((player, index) => (
                                    <tr>Player{index + 1}:{ player }</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </>
                    ) : null}

                <div>
                    <button
                        onClick={this.handleReset}
                        className="formButton resetButton"
                        type="submit">
                        Reset!
                    </button>
                </div>
            </>
        )
    }
}


PlayerInput.defaultProps = {
    playerName: ''
}


export default PlayerInput;
