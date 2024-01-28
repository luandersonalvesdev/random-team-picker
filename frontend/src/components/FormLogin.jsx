import { useState } from 'react';
import instanceAxios from '../utils/axios';
import PropsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { setToLs } from '../utils/localStorage';

export default function FormLogin({ setLoginFailedMsg }) {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    instanceAxios.post('/login', { ...formValues })
      .then(response => {
        setToLs('rtp-token', response.data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setLoginFailedMsg(err.response.data.message)
      });
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Entrar</button>
    </form>
  );
}

FormLogin.propTypes = {
  setLoginFailedMsg: PropsTypes.func
}
