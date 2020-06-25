import React, { Component } from "react";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            submitted: false,
            teamOne: [],
            teamTwo: [],
        };
        //store playerName input locally 

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSubmitTeams = this.handleSubmitTeams.bind(this);

        this.handleEditPlayers = this.handleEditPlayers.bind(this);

        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);

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
        e.preventDefault();
        this.setState({ submitted: true });
        this.props.handleSubmitTeams(players)
        //change state of submitted to true, so as to show and hide appropriate elements 
    }

    handleEditPlayers(e) {
        const { playerName } = this.state;
        this.props.handleEditPlayers(playerName)
        this.setState({ submitted: false })
    }

    handleReset(e) {
        this.props.handleReset()
        this.setState({ submitted: false })
        //take user back to empty form 
    }

    handleRemovePlayer(e) {
        this.props.handleRemovePlayer()
    }


    render() {
        const { players } = this.props;
        //player inputs are stored in local state, but the players array we are accessing from the store
        const { playerName } = this.state;
        const { submitted } = this.state;


        let teamOne = players.filter((_, index) => {
            return index < players.length / 2;
        });

        let teamTwo = players.filter((_, index) => {
            return index >= players.length / 2;
        });

        //displayed below:
        // reset button - take user back to empty form 
        // edit players button - appears when form is submitted 
        // playerName form  - user inputs n amount of player names 
        // add player button renders new player to list
        // randomise team button - submits form, which then hides form and displays two team tables 
        return (
            <>
                <div className="wrapper">
                        <button
                            onClick={this.handleReset}
                            className="formButton resetButton"
                            type="submit">
                            Reset!
                    </button>
                        {submitted ? (
                            <button
                                onClick={this.handleEditPlayers}
                                className="formButton editButton"
                                type="submit">
                                Edit Players
                            </button>) : null}


                    {!submitted ? (
                        <div className="playerInputForm">

                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <h1 className="title">Name Your Players</h1>
                                    <p>Enter Your Player Names & Then Click <strong>'Randomise Teams'</strong> To Generate Two Random Teams..</p>
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
                                        <>
                                            <li
                                                key={index}
                                                className="playerListItem">
                                                <label className="playerLabel">Player{index + 1} :  </label>
                                                {player}
                                            </li>
                                            <button
                                                className="removePlayerButton"
                                                onClick={() => this.handleRemovePlayer(player.id)}>Remove Player
                                    </button>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ) : null}


                    {!submitted ? (
                        <div className="submitTeamButtonContainer">
                            <button
                                onClick={this.handleSubmitTeams}
                                className="formButton submitTeamButton"
                                type="submit">
                                Randomise Teams!
                            </button>
                        </div>) : null}


                    {submitted ? (
                        <>
                            <div className="teamTables">
                                <table className="teamTable">
                                    <thead>
                                        <tr>
                                            <th className="title">Team One</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teamOne.map((player, index) => (
                                            <tr
                                                key={index}>
                                                <strong>Player{index + 1} : </strong>{player}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div>
                                    <table className="teamTable">
                                        <thead>
                                            <tr>
                                                <th className="title">Team Two</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamTwo.map((player, index) => (
                                                <tr
                                                    key={index}>
                                                    <strong>Player{index + 1}: </strong>{player}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : null}

                </div>


            </>
        )
    }
}


PlayerInput.defaultProps = {
    playerName: ''
}


export default PlayerInput;
