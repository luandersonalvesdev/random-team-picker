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
      <button
        className='bg-red-600 text-white rounded py-1 px-3 hover:brightness-105 duration-300 ml-7'
        onClick={handleLoggout}>Sair</button>
    </div>
  )
}
