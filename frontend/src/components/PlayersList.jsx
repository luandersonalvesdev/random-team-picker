import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'
import { useContext } from 'react'
import { PlayersContext } from '../contexts/PlayersContext'
import useGetPlayers from '../hooks/useGetPlayers'

export default function PlayersList() {
  const { playersList } = useContext(PlayersContext)

  useGetPlayers();

  return (
    <div>
      <ul>
        {
          playersList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((player) => <PlayerItem key={player.id} player={player} />)
        }
      </ul>
    </div>
  )
}

PlayersList.propTypes = {
  players: PropTypes.array
}
