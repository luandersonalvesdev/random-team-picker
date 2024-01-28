import { useState } from 'react';
import instanceAxios from '../utils/axios';
import PropsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { setToLs } from '../utils/localStorage';

export default function FormLogin() {
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
    <>
      <form>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
          password:
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </form>
      <div>
        {
          loginFailedMsg && <p>{loginFailedMsg}</p>
        }
      </div>
    </>
  );
}

FormLogin.propTypes = {
  setLoginFailedMsg: PropsTypes.func
}
