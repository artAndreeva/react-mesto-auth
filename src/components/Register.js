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
    <div className="authorization">
        <h1 className="authorization__title">Регистрация</h1>
        <form
          className="authorization__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate >
          <div className="authorization__field">
            <input
              className="authorization__input"
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
            <span className={`form__error ${!isValid && 'form__error_visible'}`}>{errors.email}</span>
          </div>
          <div className="authorization__field">
            <input
              className="authorization__input"
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
            <span className={`form__error ${!isValid && 'form__error_visible'}`}>{errors.password}</span>
          </div>
          <button
            disabled={!isValid}
            className={`authorization__button button button_opacity_login ${!isValid && 'authorization__button_disabled'}`}
            type="submit">Зарегистрироваться
          </button>
          <p className="authorization__text">Уже зарегистрированы?
            <Link to="/sign-in" className="authorization__link button button_opacity_login"> Войти</Link>
          </p>
        </form>
    </div>
  )
 }

 export default Register;

