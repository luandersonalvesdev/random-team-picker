import { useState, useRef, useEffect, useContext } from 'react';
import instanceAxios from '../utils/axios';
import { PlayersContext } from '../contexts/PlayersContext';

export default function PlayerAdder() {
  const [playersToAdd, setPlayersToAdd] = useState('');
  const textAreaRef = useRef(null);
  const { playersList, setPlayersList, isLogged } = useContext(PlayersContext);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  };

  useEffect(resizeTextArea, [playersToAdd]);

  const handleChange = (event) => {
    const { value } = event.target;
    setPlayersToAdd(value);
  };

  const handleAddPlayers = async (event) => {
    event.preventDefault();

    let newPlayers = [];

    const players = formattedPlayersToAdd();

    if(isLogged) {
      const playersAdded = await instanceAxios.post('/dashboard/player', { players });
      newPlayers = [
        ...playersAdded.data
      ]
    } else {
      newPlayers = [
        ...players.map((name, index) => ({ id: playersList.length + index + 1, name })),
      ];
    }


    setPlayersList((prev) => [...prev, ...newPlayers]);
    setPlayersToAdd('');
  }

  const formattedPlayersToAdd = () => {
    const formatted = playersToAdd
      .split(/\n/)
      .flatMap((line) => line.replace(/,$/, '').split(',').map((item) => item.trim()))
      .filter((name) => name);
    return formatted
  }

  return (
    <div className='pt-10 opacity-95'>
      <h1 className='text-4xl font-bold mb-2'>Adicione jogadores</h1>
      <p className='text-base text-secondary-app'>Digite os nomes, separando-os por vírgulas ou pulando para uma nova linha.</p>
      <form className='flex items-center mt-2 mb-5'>
        <textarea
        className='w-full border rounded p-3 resize-none overflow-y-hidden max-w-96 placeholder:italic'
          ref={textAreaRef}
          value={playersToAdd}
          onChange={handleChange}
          rows={1}
          placeholder='Jogador 1, Jogador 2...'
        />
        <button
            className='bg-secondary-app text-white rounded py-2 px-2 hover:brightness-110 duration-300 ml-2 disabled:opacity-40 disabled:cursor-not-allowed'
            onClick={handleAddPlayers}
            disabled={!playersToAdd}
          >
            Adicionar
        </button>
      </form>
    </div>
  )
}
