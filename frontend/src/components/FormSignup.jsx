import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import instanceAxios from '../utils/axios'
import { setToLs } from '../utils/localStorage'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from 'react-simple-captcha';

export default function FormSignup() {
  const [captchaField, setCaptchaField] = useState('');
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
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

    if(!validateCaptcha(captchaField, false)) {
      return setLoginFailedMsg('Invalid captcha')
    }

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
        <div>
          {
            loginFailedMsg && <p>{loginFailedMsg}</p>
          }
        </div>
        <div>
          <LoadCanvasTemplate />
          <p>Este campo é sensível a maiúsculas e minúsculas. Certifique-se de inserir corretamente.</p>
          <input type="text" onChange={handleCaptchaChange}/>
        </div>
        <button onClick={handleSignup}>Criar conta</button>
      </form>
    </>
  );
}
