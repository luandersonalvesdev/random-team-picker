import FormLogin from '../../components/FormLogin'
import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function Login() {
  const [loginFailedMsg, setLoginFailedMsg] = useState('');

  return (
    <div>
      <FormLogin setLoginFailedMsg={setLoginFailedMsg}/>
      {
        loginFailedMsg && <p>{loginFailedMsg}</p>
      }
      <p>
        Se ainda não tem uma conta
        <Link to='/signup'>crie uma aqui</Link>.
      </p>
      <p>Ou</p>
      <Link to='/dashboard'>Entre como um convidado</Link>
      <p>Entrar como convidado não irá salvar seus jogadores!</p>
    </div>
  )
}
