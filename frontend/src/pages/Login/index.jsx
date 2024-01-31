import FormLogin from '../../components/FormLogin'
import { Link } from 'react-router-dom'
import JoinAsGuest from '../../components/JoinAsGuest'

export default function Login() {

  return (
    <div>
      <h1>Entrar</h1>
      <FormLogin />
      <p>Se ainda não tem uma conta <Link to='/signup'>crie aqui</Link>.</p>
      <JoinAsGuest />
    </div>
  )
}
