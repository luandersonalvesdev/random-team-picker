import { Link } from 'react-router-dom';

export default function JoinAsGuest() {
  return (
    <div className='flex flex-col justify-center items-center text-center opacity-85 mt-2 mb-7 text-sm'>
      <p className=''>ou</p>
      <Link className='p-2 bg-secondary-app text-white rounded mt-2' to='/dashboard'>Entre como um convidado</Link>
      <p className='text-xs text-red-600 mt-2 pt-1'>Entrar como convidado não irá salvar seus jogadores!</p>
    </div>
  )
}
