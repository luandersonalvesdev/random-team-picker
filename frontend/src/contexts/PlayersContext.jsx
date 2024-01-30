import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = createContext();

export default function PlayersContextProvider({children}) {
  const [playersList, setPlayersList] = useState([]);
  const [selectedPlayersList, setSelectedPlayersList] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const value = {
    playersList,
    setPlayersList,
    isLogged,
    setIsLogged,
    selectedPlayersList,
    setSelectedPlayersList
  }

  return(
    <PlayersContext.Provider value={value}>
      {children}
    </PlayersContext.Provider>
  )
}

PlayersContextProvider.propTypes = {
  children: PropTypes.node
}
