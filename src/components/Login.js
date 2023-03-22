import { useFormAndValidation } from '../hooks/useFormAndValidation';

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
    resetForm();
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
              value={values.email || ''}
              onChange={handleChange}
              placeholder="Email"
              required
              minLength="2"
              maxLength="40"/>
            <span className={`form__error ${!isValid && 'form__error_visible'}`}>{errors.email}</span>
          </div>
          <div className="login__field">
            <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              value={values.password || ''}
              onChange={handleChange}
              placeholder="Пароль"
              required
              minLength="2"
              maxLength="40"/>
            <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.password}</span>
          </div>
          <button
            disabled={!isValid}
            className={`login__button button button_opacity_login ${!isValid && 'login__button_disabled'}`}
            type="submit">Войти
          </button>
        </form>
      </div>
    </div>
  )
 }

 export default Login;
