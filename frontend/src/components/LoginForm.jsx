import { useState } from 'react';
import instanceAxios from '../utils/axios';
import PropsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { setToLs } from '../utils/localStorage';

export default function LoginForm() {
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
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
    instanceAxios.post('/login', { ...formValues })
      .then(response => {
        setToLs('rtp-token', response.data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setLoginFailedMsg(err.response.data.message)
      });
    event.preventDefault();
  }

  return (
    <div className='flex flex-col w-9/12'>
      <h2 className='text-4xl mb-8 opacity-90'>Entrar</h2>
      <form>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-400'>
            Username
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-6 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              maxLength={20}
            />
          </label>
        </div>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-400'>
          password
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-6 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              maxLength={20}
            />
          </label>
        </div>
        <button
          className='bg-main-app hover:brightness-105 text-black text-opacity-80 font-bold py-2 rounded w-full duration-300'
          onClick={handleLogin}
          >
            Entrar
        </button>
      </form>
      <div >
        {
          loginFailedMsg
            && (
            <p className='mt-4 w-full text-red-500 text-opacity-80 flex justify-center items-center text-center bg-red-100 rounded-md py-1.5'>{loginFailedMsg}</p>
            )
        }
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  setLoginFailedMsg: PropsTypes.func
}
