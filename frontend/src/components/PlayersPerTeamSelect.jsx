import { useContext } from 'react';
import { PlayersContext } from '../contexts/PlayersContext';
import PropTypes from 'prop-types'

export default function PlayersPerTeamSelect({ setPlayersPerTeam }) {

  const { selectedPlayersList } = useContext(PlayersContext);

  const handleChange = (event) => setPlayersPerTeam(Number(event.target.value));

  return (
    <div>
      <p>Selecione a quantidade de jogadores por time</p>
      <select onChange={handleChange}>
        {
          selectedPlayersList.map((_, ind) => {
            return <option key={ind} value={ind + 1}>{ind + 1}</option>
          })
        }
      </select>
    </div>
  )
}

PlayersPerTeamSelect.propTypes = {
  setPlayersPerTeam: PropTypes.func
}
