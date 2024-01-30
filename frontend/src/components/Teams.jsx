import { useState } from 'react';
import PlayersPerTeamSelect from './PlayersPerTeamSelect';
import TeamsPicked from './TeamsPicked';

export default function Teams() {
  const [playersPerTeam, setPlayersPerTeam] = useState(1);
  const [teamsList, setTeamsList] = useState([]);

  return (
    <div>
      <PlayersPerTeamSelect setPlayersPerTeam={setPlayersPerTeam}/>
      <TeamsPicked
        playersPerTeam={playersPerTeam}
        teamsList={teamsList}
        setTeamsList={setTeamsList}
      />
    </div>
  )
}
