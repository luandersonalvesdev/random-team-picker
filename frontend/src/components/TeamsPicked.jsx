import { useContext, useState } from 'react'
import { PlayersContext } from '../contexts/PlayersContext'
import PropTypes from 'prop-types'
import Team from './Team'

export default function TeamsPicked({ playersPerTeam, teamsList, setTeamsList }) {
  const { playersList } = useContext(PlayersContext)
  const [isPickedTeamsShowed, setIsPickedTeamsShowed] = useState(false);

  const randomPick = () => {
    const shuffledPlayers = playersList.sort(() => Math.random() - 0.5);

    const shuffledTeams = shuffledPlayers.reduce((result, player, index) => {
      const teamIndex = Math.floor(index / playersPerTeam);

      if (!result[teamIndex]) {
        result[teamIndex] = { teamName: `Time ${teamIndex + 1}`, players: [] };
      }

      result[teamIndex].players.push(player.name);

      return result;
    }, []);
    setTeamsList(shuffledTeams)
    setIsPickedTeamsShowed(true)
  }

  return (
    <div>
      <button onClick={randomPick}>Sortear times</button>
      {
        isPickedTeamsShowed
          && (
            <>
            <h2>Times sorteados</h2>
            <ul>
              {
                teamsList.map((team) => <Team key={team.teamName} team={team} />)
              }
            </ul>
            </>
          )
      }

    </div>
  )
}

TeamsPicked.propTypes = {
  playersPerTeam: PropTypes.number,
  teamsList: PropTypes.array,
  setTeamsList: PropTypes.func
}
