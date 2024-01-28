import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = createContext();

export default function PlayersContextProvider({children}) {
  const [playersList, setPlayersList] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const value = {
    playersList, setPlayersList, isLogged, setIsLogged
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
