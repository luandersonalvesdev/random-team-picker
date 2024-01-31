import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import useGetUser from '../hooks/useGetUser'

export default function Header() {
  useGetUser();

  const { userData } = useContext(UserContext);

  return (
    <header>
      <p>Você está logado como { userData.username }</p>
    </header>
  )
}
