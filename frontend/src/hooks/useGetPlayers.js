import { useEffect, useContext, useState } from 'react';
import { getFromLs } from '../utils/localStorage';
import instanceAxios from '../utils/axios';
import { PlayersContext } from '../contexts/PlayersContext';

const useGetPlayers = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { setPlayersList } = useContext(PlayersContext);

  useEffect(() => {
    console.log('FEZ UMA REQUISIÇÃO');
    const storedToken = getFromLs('rtp-token');

    instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
    instanceAxios.get('/dashboard/player')
      .then((response) => {
        setPlayersList(response.data)
        setIsAuth(true)
      }).catch((error) => {
        setPlayersList([])
        setIsAuth(false)
        console.log(error);
      })
  }, []);

  return { isAuth };

};

export default useGetPlayers
