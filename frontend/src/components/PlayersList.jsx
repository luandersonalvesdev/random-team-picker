import PropTypes from 'prop-types'
import PlayerItem from './PlayerItem'
import { useContext } from 'react'
import { PlayersContext } from '../contexts/PlayersContext'
import { Link } from 'react-router-dom'
import useGetPlayers from '../hooks/useGetPlayers'

export default function PlayersList() {
  const { playersList, isLogged } = useContext(PlayersContext)

  useGetPlayers();

  return (
    <div>
      {
        !isLogged
          &&
            <p>
              Voce está usando como convidado logo seus jogadores não serão salvos.
              Para salvar seus jogadores <Link to='/login'>entre</Link> ou <Link to='/signup'>crie uma conta</Link>.
            </p>
      }
      <ul>
        {
          playersList.map((player) => <PlayerItem key={player.id} player={player} />)
        }
      </ul>
    </div>
  )
}

PlayersList.propTypes = {
  players: PropTypes.array
}
