import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import * as auth from '../utils/auth';

function Login({ handleLogin }) {
  const { errors, isValid } = useFormAndValidation({});
  const [formValue, setFormValue] = useState({
    password: '',
    email: ''
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.password || !formValue.email){
      return;
    }
    auth.authorize(formValue.password, formValue.email)
      .then((data) => {
        if (data.jwt){
          setFormValue({password: '', email: ''});
          handleLogin();
          navigate('/', {replace: true});
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Вход</h1>
        <form
          className="login__form"
          name="login"
          onSubmit={handleSubmit}
          noValidate >
          <div className="login__field">
            <input
                className="login__input"
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Email"
                required />
            {/*   <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span> */}
          </div>
          <div className="login__field">
          <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Пароль"
              required />
            {/*   <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span> */}
          </div>
          <button
            className="login__button button button_opacity_login"
            type="submit">Войти
          </button>
        </form>
      </div>
    </div>
  )
 }

 export default Login;
