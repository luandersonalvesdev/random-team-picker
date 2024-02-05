import { useContext } from 'react';
import { PlayersContext } from '../contexts/PlayersContext';
import PropTypes from 'prop-types'

export default function PlayersPerTeamSelect({ setPlayersPerTeam }) {

  const { selectedPlayersList } = useContext(PlayersContext);

  const handleChange = (event) => setPlayersPerTeam(Number(event.target.value));

  return (
    <>
      {
        selectedPlayersList.length > 0
          && (
            <div className='mt-6 border rounded p-4'>
                <p className='text-xl font-bold mb-3'>Selecione a quantidade de jogadores por time</p>
                <select
                  className='bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-secondary-app focus:border-secondary-app block w-full max-w-16 p-2.5'
                  onChange={handleChange}>
                  {
                    selectedPlayersList.map((_, ind) => {
                      return (
                        <option
                          key={ind}
                          value={ind + 1}
                        >
                          {ind + 1}
                        </option>
                      )
                    })
                  }
                </select>
            </div>
          )
      }
    </>
  )
}

PlayersPerTeamSelect.propTypes = {
  setPlayersPerTeam: PropTypes.func
}
