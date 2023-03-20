function InfoTooltip ({ onClose }) {
  return (
    <div className="popup"  >
      <div className="popup__container">
        <button
          className="popup__close-button button button_opacity_page"
          type="button"
          onClick={onClose}>
          </button>
        <img src="" alt=""></img>
        <p>Вы успешно зарегистрировались!</p>
      </div>
    </div >
  );
}

export default InfoTooltip;

