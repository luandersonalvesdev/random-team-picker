import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'
import { useContext } from 'react'
import { PlayersContext } from '../contexts/PlayersContext'
import useGetPlayers from '../hooks/useGetPlayers'

export default function PlayersList() {
  const { playersList, selectedPlayersList } = useContext(PlayersContext)

  useGetPlayers();

  return (
    <div>
      <p className='text-2xl font-bold mt-10'>Jogadores adicionados</p>
      <ul className='flex flex-row flex-wrap my-3'>
        {
          playersList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((player) => <PlayerItem key={player.id} player={player} />)
        }
      </ul>
      <span className='italic text-base text-gray-500'>
        Quantidade de jogadores selecionados:
      </span>
      <span
        className='text-secondary-app text-lg font-bold ml-1'
      >
        {selectedPlayersList.length}
      </span>
    </div>
  )
}

PlayersList.propTypes = {
  players: PropTypes.array
}
