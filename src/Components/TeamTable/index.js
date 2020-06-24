import { connect } from "react-redux";

import TeamTable from "./TeamTable";
//import the component that we want to wrap

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

export default connect(mapStateToProps, mapDispatchToProps)(TeamTable);