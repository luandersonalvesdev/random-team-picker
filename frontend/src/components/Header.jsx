import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { PlayersContext } from '../contexts/PlayersContext'
import useGetUser from '../hooks/useGetUser'
import { Link } from 'react-router-dom';
import Loggout from './Logout';

export default function Header() {
  useGetUser();

  const { userData } = useContext(UserContext);
  const { isLogged } = useContext(PlayersContext);

  return (
    <header className='bg-gray-100 flex w-full justify-between items-center px-8 py-4 rounded opacity-95'>
      {
        isLogged
          ? <span>
              Você está usando como
                <span className='text-secondary-app font-bold'>
                  { ` ${userData.username}` }
                </span>
            .</span>
          : (
            <p>
              Voce está como convidado. <Link className='text-main-app-200' to='/login'>Entre</Link> ou <Link className='text-main-app-200' to='/signup'>crie uma conta</Link>.
            </p>
          )
      }
      <Loggout />
    </header>
  )
}
