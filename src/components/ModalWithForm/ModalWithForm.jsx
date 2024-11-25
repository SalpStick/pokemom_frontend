import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  closeActiveModal,
  onSubmit,
  linkText,
  onLinkClick,
})  {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__name">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__btns">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
           <button
            type="button"
            className="modal__option-btn"
            onClick={onLinkClick}
           >
             {linkText}
           </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
