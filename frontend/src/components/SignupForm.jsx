import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import instanceAxios from '../utils/axios'
import { setToLs } from '../utils/localStorage'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from 'react-simple-captcha';
import LoadingSpinner from './LoadingSpinner';

export default function SignupForm() {
  const [captchaField, setCaptchaField] = useState('');
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    email: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCaptchaChange = (event) => {
    const { value } = event.target;
    setCaptchaField(value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if(!validateCaptcha(captchaField, true)) {
      return setLoginFailedMsg('Invalid captcha')
    }

    instanceAxios.post('/signup', { ...formValues })
      .then(response => {
        setToLs('rtp-token', response.data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setLoginFailedMsg(err.response.data.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <h1 className='text-4xl mb-8 opacity-90 font-bold'>Criar conta</h1>
      <form>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-500'>
            Username:
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-4 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-500'>
          password:
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-4 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className='block text-sm font-medium leading-6 text-gray-500'>
          email:
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 mb-4 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='flex flex-col justify-center items-center mt-2 mb-4'>
          <LoadCanvasTemplate />
          <input
            className='block w-full rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-700 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-app outline-none'
            type="text" onChange={handleCaptchaChange}
          />
        </div>
        <div>
          {
            isLoading
              ? <LoadingSpinner />
              : loginFailedMsg
                  && (
                    <p className='mb-4 w-full text-red-500 text-opacity-80 flex justify-center items-center text-center bg-red-100 rounded-md py-1.5 p-2'>{loginFailedMsg}</p>
                  )
          }
        </div>
        <button
          className='bg-main-app hover:brightness-105 text-black text-opacity-80 font-bold py-2 rounded w-full duration-300 mt-3'
          onClick={handleSignup}>Criar conta</button>
      </form>
      <div className='flex justify-center mt-9'>
        <p className='opacity-85 text-sm text-center'>Se já possui uma conta <Link to='/login' className='text-main-app-200 hover:underline'>entre</Link>.</p>
      </div>
    </div>
  );
}
