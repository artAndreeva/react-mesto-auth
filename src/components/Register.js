import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import * as auth from '../utils/auth';

function Register() {
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
    const { password, email } = formValue;
    auth.register(password, email)
      .then (() => {
        navigate('/sign-in', {replace: true});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="register">
      <div className="register__container">
        <h1 className="register__title">Регистрация</h1>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate >
          <div className="register__field">
            <input
                className="register__input"
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Email"
                required
                minLength="6"
                />
          {/*   <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span> */}
          </div>
          <div className="register__field">
            <input
              className="register__input"
              type="password"
              name="password"
              id="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Пароль"
              required
              minLength="6"
              />
            {/* <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span> */}
          </div>
          <button
            className="register__button button button_opacity_login"
            type="submit">Зарегистрироваться
          </button>
          <p className="register__text">Уже зарегистрированы?
            <Link to="/sign-in" className="register__link button button_opacity_login"> Войти</Link>
          </p>
        </form>
      </div>
    </div>
  )
 }

 export default Register;

