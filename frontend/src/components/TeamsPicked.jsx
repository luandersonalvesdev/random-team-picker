import { useContext, useState } from 'react'
import { PlayersContext } from '../contexts/PlayersContext'
import PropTypes from 'prop-types'
import Team from './Team'

export default function TeamsPicked({ playersPerTeam, teamsList, setTeamsList }) {
  const { selectedPlayersList } = useContext(PlayersContext)
  const [isPickedTeamsShowed, setIsPickedTeamsShowed] = useState(false);

  const randomPick = () => {
    const shuffledPlayers = selectedPlayersList.sort(() => Math.random() - 0.5);

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
      <button
        className='bg-secondary-app text-white rounded py-2 px-2 hover:brightness-110 duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2'
        onClick={randomPick}
        disabled={!selectedPlayersList.length}
      >
        Sortear times
      </button>
      {
        isPickedTeamsShowed
          && (
            <>
            <p className='mt-5 rounded bg-green-100 p-2 w-auto'>Times sorteados com sucesso!</p>
            <h2
              className='mt-7 text-3xl font-bold bg-gray-200 p-2 rounded'
            >
              Times sorteados
            </h2>
            <ul className='flex flex-row flex-wrap'>
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
