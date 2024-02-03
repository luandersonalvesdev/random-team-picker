import PropType from 'prop-types'
import { useContext, useState } from 'react';
import { PlayersContext } from '../contexts/PlayersContext'
import instanceAxios from '../utils/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

export default function PlayerItem({player: {name, id}}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const { playersList, setPlayersList, isLogged } = useContext(PlayersContext);
  const { setSelectedPlayersList } = useContext(PlayersContext);

  const handleEditName = (event) => {
    const { value } = event.target;
    setEditedName(value)
  }

  const handleUpdateName = async () => {

    if(isLogged) {
      instanceAxios.patch(`/dashboard/player/${id}`, { name: editedName });
    }

    const newPlayers = playersList.map((player) => {
      if(id === player.id) {
        return { ...player, name: editedName }
      }
      return player
    })

    setPlayersList(newPlayers);
    setIsEditing(false)
  }

  const handleRemoveName = () => {

    if(isLogged) {
      instanceAxios.delete(`/dashboard/player/${id}`);
    }

    const newPlayers = playersList.filter((player) => player.id !== id);
    setPlayersList(newPlayers)
  }

  const handleSelectPlayer = () => {
    setSelectedPlayersList((prev) => {
      const isPlayerOnList = prev.some((player) => player.id === id);
      if(isPlayerOnList) {
        return prev.filter((player) => player.id !== id)
      }
      return [...prev, { id, name }]
    })
  }

  return (
    <div>
      {
        isEditing
          ? (
            <li className='border p-2 m-1 rounded'>
              <input
                className='w-36 rounded-md py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
                type="text"
                value={editedName}
                onChange={handleEditName}
                maxLength={50}
              />
              <button
                className='py-1 px-2 rounded text-white bg-secondary-app border ml-2 hover:brightness-110 duration-300 disabled:opacity-40 disabled:cursor-not-allowed'
                disabled={!editedName.trim()}
                onClick={handleUpdateName}
              >
                Salvar
              </button>
            </li>
          )
          : (
            <li className='border p-2 m-1 rounded'>
              <label className='flex items-center '>
                <input
                  className='h-4 w-4 border rounded bg-white checked:bg-main-app checked:border-main-app-200'
                  type="checkbox"
                  onChange={handleSelectPlayer}
                  value={name}
                />
                <p className='ml-2 mr-8 text-xl'>{name}</p>
                <div className='border-l pl-2 h-full'>
                  <button
                    className='py-1 px-2 rounded text-green-900 bg-green-200 border border-green-600 mr-1'
                    onClick={() => setIsEditing(true)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className='py-1 px-2 rounded text-red-600 bg-red-100 border border-red-300'
                    onClick={handleRemoveName}
                  >
                      <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </label>
            </li>
          )
      }
    </div>
  )
}

PlayerItem.propTypes = {
  player: PropType.shape({
    name: PropType.string,
    id: PropType.number
  })
}
