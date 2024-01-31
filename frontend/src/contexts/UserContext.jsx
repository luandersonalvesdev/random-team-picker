import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UserContextProvider({children}) {
  const [userData, setUserData] = useState({});

  const value = { userData, setUserData }

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node
}
