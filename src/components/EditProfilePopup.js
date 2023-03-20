import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {

  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation({});

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
    if (!isOpen) {
      resetForm();
    }
  }, [setValues, resetForm, isOpen, currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onUpdateUser(values);
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={'edit'}
      title={'Редактировать профиль'}
      buttonName={'Сохранить'}
      buttonLoading={'Сохранение...'}
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
    >
      <div className="popup__field">
        <input
          value={values.name || ''}
          onChange={handleChange}
          className={`popup__input ${errors.name && 'popup__input_type_error'}`}
          id="input-username"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40" />
        <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span>
      </div>
      <div className="popup__field">
        <input
          value={values.about || ''}
          onChange={handleChange}
          className={`popup__input ${errors.about && 'popup__input_type_error'}`}
          id="input-about"
          type="text"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200" />
        <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.about}</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
