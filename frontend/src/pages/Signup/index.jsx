import { Link } from 'react-router-dom';
import FormSignup from '../../components/FormSignup';
import JoinAsGuest from '../../components/JoinAsGuest';

export default function Signup() {
  return (
    <div>
      <h1>Criar conta</h1>
      <FormSignup />
      <p>Se já tem uma conta <Link to='/login'>entre</Link>.</p>
      <JoinAsGuest />
    </div>
  )
}
