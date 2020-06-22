import PlayerInput from "./PlayerInput";
//import the component that we want to wrap

import { addPlayerReducer } from "../../data/reducers";

 const mapStateToProps = state => {
  return {
      players: state.players,
  };
};

export default connect(mapStateToProps)(PlayerInput);

