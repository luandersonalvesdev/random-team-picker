import { Link } from 'react-router-dom';

export default function JoinAsGuest() {
  return (
    <div>
      <p>ou</p>
      <Link to='/dashboard'>Entre como um convidado</Link>
      <p>Entrar como convidado não irá salvar seus jogadores!</p>
    </div>
  )
}
