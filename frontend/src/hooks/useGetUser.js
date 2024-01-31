import { useEffect, useContext } from 'react';
import { getFromLs, removeToLs } from '../utils/localStorage';
import instanceAxios from '../utils/axios';
import { UserContext } from '../contexts/UserContext';

const useGetUser = () => {
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    const storedToken = getFromLs('rtp-token');

    if(!storedToken) {
      setUserData({username: '-'});
      return;
    }

    instanceAxios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
    instanceAxios.get('/user')
      .then((response) => {
        setUserData({...response.data.data});
      }).catch((error) => {
        removeToLs('rtp-token');
        console.log(error);
      })
  }, []);

};

export default useGetUser
