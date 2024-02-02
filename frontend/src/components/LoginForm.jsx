import { useState } from 'react';
import instanceAxios from '../utils/axios';
import PropsTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { setToLs } from '../utils/localStorage';
import LoadingSpinner from './LoadingSpinner';

export default function LoginForm() {
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    setIsLoading(true);
    instanceAxios.post('/login', { ...formValues })
      .then(response => {
        setToLs('rtp-token', response.data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setLoginFailedMsg(err.response.data.message)
      })
      .finally(() => {
        setIsLoading(false);
      })
    event.preventDefault();
  }

  return (
    <div className='flex flex-col'>
      <h2 className='text-4xl mb-8 opacity-90 font-bold'>Entrar</h2>
      <form>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-500'>
            Usuário
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-4 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              maxLength={20}
            />
          </label>
        </div>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-500'>
          Senha
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-4 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              maxLength={20}
            />
          </label>
        </div>
        <div >
          {
            isLoading
              ? <LoadingSpinner />
              : loginFailedMsg
                  && (
                  <p className='mb-4 w-full text-red-500 text-opacity-80 flex justify-center items-center text-center border bg-red-50 border-red-100 rounded-md py-1.5 p-2'>{loginFailedMsg}</p>
                  )
          }
        </div>
        <button
          className='bg-main-app hover:brightness-105 text-black text-opacity-80 font-bold py-2 rounded w-full duration-300 mt-3'
          onClick={handleLogin}
          >
            Entrar
        </button>
      </form>
      <div className='flex justify-center mt-9'>
        <p className='opacity-85 text-sm text-center'>Se ainda não tem uma conta <Link to='/signup' className='text-main-app-200 hover:underline'>crie aqui</Link>.</p>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  setLoginFailedMsg: PropsTypes.func
}
