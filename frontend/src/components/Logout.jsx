import { useNavigate } from 'react-router-dom';
import { removeToLs } from '../utils/localStorage';

export default function Loggout() {

  const navigate = useNavigate()

  const handleLoggout = () => {
    removeToLs('rtp-token')
    navigate('/login')
  }

  return (
    <div>
      <button onClick={handleLoggout}>Sair</button>
    </div>
  )
}
