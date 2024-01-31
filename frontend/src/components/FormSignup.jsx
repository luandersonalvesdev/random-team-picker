import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import instanceAxios from '../utils/axios'
import { setToLs } from '../utils/localStorage'

export default function FormSignup() {
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSignup = (event) => {
    instanceAxios.post('/signup', { ...formValues })
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
        <div>
          <label>
          email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={handleSignup}>Criar conta</button>
      </form>
      <div>
        {
          loginFailedMsg && <p>{loginFailedMsg}</p>
        }
      </div>
    </>
  );
}
