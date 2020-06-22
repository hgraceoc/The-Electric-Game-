import React, { Component } from "react";
import inital from "../../data/initial";

class PlayerInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player: props.player,
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ player: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.player)
      }

    render() {
        let { player } = this.state;


    return (
        <>
        <div className="playerInputForm">

            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">Name Your Players</h1>
                    <div className="formGroup">
                        <input
                            onChange={this.handleChange}
                            value={player}
                            placeholder="#1">
                        </input>

                    </div>
                    <button 
                        className="formButton"
                        type="submit">
                        Pick My Teams</button>
                </form>
            </div>
        </div>
        </>
    )

}
}


export default PlayerInput;
