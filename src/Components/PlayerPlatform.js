import React from 'react';

import PlayerInput from "./PlayerInput";
import TeamTable from "./TeamTable/TeamTable";

function PlayerPlatform() {

    return (
      <div className="background">
          <PlayerInput></PlayerInput>
          <TeamTable></TeamTable>
          <TeamTable></TeamTable>
      </div>
    );
  }
  
  export default PlayerPlatform;