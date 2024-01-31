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
    <header>
      {
        isLogged
          ? <p>Você está logado como { userData.username }</p>
          : (
            <p>
              Voce está usando como convidado logo seus jogadores não serão salvos.
              Para salvar seus jogadores <Link to='/login'>entre</Link> ou <Link to='/signup'>crie uma conta</Link>.
            </p>
          )
      }
      <Loggout />
    </header>
  )
}
