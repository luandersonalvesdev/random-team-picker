import PropType from 'prop-types'
import { useContext, useState } from 'react';
import { PlayersContext } from '../contexts/PlayersContext'
import instanceAxios from '../utils/axios';

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
    <>
      {
        isEditing
          ? (
            <li>
              <input type="text" value={editedName} onChange={handleEditName} maxLength={25}/>
              <button disabled={!editedName.trim()} onClick={handleUpdateName}>Salvar</button>
            </li>
          )
          : (
            <li>
              <label>
                <input type="checkbox" onChange={handleSelectPlayer} value={name} />
                <p>{name}</p>
                <button onClick={() => setIsEditing(true)}>Editar</button>
                <button onClick={handleRemoveName}>Remover</button>
              </label>
            </li>
          )
      }
    </>
  )
}

PlayerItem.propTypes = {
  player: PropType.shape({
    name: PropType.string,
    id: PropType.number
  })
}
