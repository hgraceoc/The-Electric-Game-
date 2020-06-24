import { connect } from "react-redux";

import PlayerInput from "./PlayerInput";
//import the component that we want to wrap

import { addPlayer } from "../../data/actions";

 const mapStateToProps = state => {
  return {
      players: state.players,
  };

};
const mapDispatchToProps = dispatch => {
  return {
      handleSubmit: playerName => dispatch(addPlayer(playerName)),      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);

