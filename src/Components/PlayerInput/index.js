import { connect } from "react-redux";

import PlayerInput from "./PlayerInput";
//import the component that we want to wrap

import { addPlayer } from "../../data/actions";

 const mapStateToProps = state => {
  return {
      player: state.player,
      players: state.players,
  };

};
const mapDispatchToProps = dispatch => {
  return {
      handleSubmit: data => dispatch(addPlayer(data)),      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInput);

