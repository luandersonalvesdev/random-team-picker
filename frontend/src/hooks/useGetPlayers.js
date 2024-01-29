import { useEffect, useContext } from 'react';
import { getFromLs, removeToLs } from '../utils/localStorage';
import instanceAxios from '../utils/axios';
import { PlayersContext } from '../contexts/PlayersContext';

const useGetPlayers = () => {
  const { setPlayersList, setIsLogged } = useContext(PlayersContext);

  useEffect(() => {
    const storedToken = getFromLs('rtp-token');

    if(!storedToken) {
      setPlayersList([])
      return;
    }

    instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
    instanceAxios.get('/dashboard/player')
      .then((response) => {
        setPlayersList(response.data);
        setIsLogged(true);
      }).catch((error) => {
        setPlayersList([]);
        setIsLogged(false);
        removeToLs('rtp-token');
        console.log(error);
      })
  }, []);

};

export default useGetPlayers
