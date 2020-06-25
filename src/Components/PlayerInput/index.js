import { connect } from "react-redux";

import PlayerInput from "./PlayerInput";
//import the component that we want to wrap

import { addPlayer, reset, shuffle } from "../../data/actions";

 const mapStateToProps = state => {
  return {
      players: state.players,
      teamOne: state.teamOne,
      teamTwo: state.teamTwo,
  };

};
const mapDispatchToProps = dispatch => {
  return {
      handleSubmit: playerName => dispatch(addPlayer(playerName)),

      handleSubmitTeams: players => dispatch(shuffle(addPlayer(players))),   

      handleReset: state => dispatch(reset(state)),    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);

