import React, { Component } from "react";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            submitted: false,
            teamOne: [],
            teamTwo: [],
            valid: false,
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
        const { players } = this.state;
        this.setState({ submitted: false })
        // this.props.handleEditPlayers(players)
    }

    handleReset(e) {
        this.props.handleReset()
        this.setState({ submitted: false })
        //take user back to empty form 
    }

    handleRemovePlayer(e) {
        const { players } = this.state;
        const { player } = this.state;
        this.props.handleRemovePlayer(player.id)
    }

    //helper function to split players into two equal teams of 5
    pickTeams = (players, numberOfPlayers) => {
        let teams = [], i = 0, n = players.length;
        while (i < n) {
            teams.push(players.slice(i, i += numberOfPlayers));
        }
        return teams;
    }



    render() {
        const { players } = this.props;
        //player inputs are stored in local state, but the players array we are accessing from the store
        const { playerName } = this.state;
        const { submitted } = this.state;

        const teams = this.pickTeams(players, 5)

        const teamOne = teams.length > 0 && teams[0].map((player, index) => {
            return <h3>Player{ index + 1 }: { player } key={index}</h3>
        })
        const teamTwo = teams.length > 1 && teams[1].map((player, index) => {
            return <h3>Player{ index + 1 }: { player }</h3>
        })



        //displayed below:
        // reset button - take user back to empty form 
        // edit players button - appears when form is submitted 
        // playerName form  - user inputs 10 player names 
        // add player button renders new player to list
        // randomise team button - submits form, which then hides form and displays two team tables 
        return (
            <>
                {!submitted ? (
                    <div className="playerInputForm">

                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <h1 className="title">Name Your Players</h1>
                                <p>Enter <strong>10 Player Names</strong> & Then Click <strong>'Randomise Teams'</strong> To Generate Two Random Teams..</p>
                                <div className="formGroup">
                                    <input
                                        onChange={this.handleChange}
                                        value={playerName}
                                        placeholder="Enter Player Name.."
                                        required>
                                    </input>

                                </div>

                                {players.length === 10 ? (
                                    <>
                                    <button
                                        disabled
                                        className="formButton"
                                        type="submit">
                                        Add Player
                                    </button>
                                    <p>Click 'Randomise Teams' To Pick Your Teams!</p>
                                    </>
                                    ) : (

                                    <button
                                        className="formButton"
                                        type="submit">
                                        Add Player
                                    </button> )}
                            </form>
                            <ul className="playerList">
                                {players.map((player, index) =>
                                    <>
                                        <li
                                            key={player.id}
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



                <div className="submitTeamButtonContainer">
                    {!submitted && players.length === 10 ? (
                        <button
                            onClick={this.handleSubmitTeams}
                            className="formButton submitTeamButton"
                            type="submit">
                            Randomise Teams!
                        </button>) : null}
                </div>


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

                                    <tr>
                                        {teamOne}
                                    </tr>

                                </tbody>
                            </table>


                            <table className="teamTable">
                                <thead>
                                    <tr>
                                        <th className="title">Team Two</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        {teamTwo}
                                    </tr>

                                </tbody>
                            </table>
                        </div>


                        <div className="buttons">
                            <button
                                onClick={this.handleEditPlayers}
                                className="formButton editButton">
                                Edit Players
                            </button>

                            <button
                                onClick={this.handleReset}
                                className="formButton resetButton1"
                                type="submit">
                                Reset!
                            </button>

                        </div>
                    </>
                ) : null}
            </>
        )
    }
}


PlayerInput.defaultProps = {
    playerName: ''
}


export default PlayerInput;
