import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

function Register({ onRegister }) {
const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
    resetForm();
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
              value={values.email || ''}
              onChange={handleChange}
              placeholder="Email"
              required
              minLength="2"
              maxLength="40"
              />
            <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.email}</span>
          </div>
          <div className="register__field">
            <input
              className="register__input"
              type="password"
              name="password"
              id="password"
              value={values.password || ''}
              onChange={handleChange}
              placeholder="Пароль"
              required
              minLength="2"
              maxLength="40"
              />
            <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.password}</span>
          </div>
          <button
            disabled={!isValid}
            className={`register__button button button_opacity_login ${!isValid && 'register__button_disabled'}`}
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

