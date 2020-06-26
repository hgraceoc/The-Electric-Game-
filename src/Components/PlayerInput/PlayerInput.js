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

        const teamOne = teams.length > 0 && teams[0]
        const teamTwo = teams.length > 1 && teams[1]

    

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
                                    <p>Enter 10 Player Names & Then Click <strong>'Randomise Teams'</strong> To Generate Two Random Teams..</p>
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
                                                onClick={() => this.handleRemovePlayer(playerName)}>Remove Player
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

                            <button
                                onClick={this.handleReset}
                                className="formButton resetButton1"
                                type="submit">
                                Reset!
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

                            <div class="buttons">                
                            <button
                                onClick={this.handleEditPlayers}
                                className="formButton editButton"
                                type="submit">
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
