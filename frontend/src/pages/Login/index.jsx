import FormLogin from '../../components/FormLogin'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div>
      <FormLogin />
      <p>
        Se ainda não tem uma conta <Link to='/signup'>crie aqui</Link>.</p>
      <p>Ou</p>
      <Link to='/dashboard'>Entre como um convidado</Link>
      <p>Entrar como convidado não irá salvar seus jogadores!</p>
    </div>
  )
}
