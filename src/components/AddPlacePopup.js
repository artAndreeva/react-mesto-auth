import { useEffect } from 'react';
import { useFormAndValidation } from '../hooks/useFormAndValidation'
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({});

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm])

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onAddPlace(values);
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name={'add'}
      title={'Новое место'}
      buttonName={'Создать'}
      buttonLoading={'Создание...'}
      isValid={isValid}
      isLoading={isLoading}
    >
      <div className="popup__field">
        <input
          value={values.name || ''}
          onChange={handleChange}
          className={`popup__input ${errors.name && 'popup__input_type_error'}`}
          id="input-name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" />
        <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.name}</span>
      </div>
      <div className="popup__field">
        <input
          value={values.link || ''}
          onChange={handleChange}
          className={`popup__input ${errors.link && 'popup__input_type_error'}`}
          id="input-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required />
        <span className={`popup__error ${!isValid && 'popup__error_visible'}`}>{errors.link}</span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
