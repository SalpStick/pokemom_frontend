import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ closeActiveModal, onLogin, isOpen, handleOpenRegisterModal }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {

    setEmail(e.target.value);
  };

  const [password, setPassword] = useState(""); 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title={"Log In"}
      closeActiveModal={closeActiveModal}
      modalType={"login"}
      buttonText={"Log In"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      linkText="or Register"
      onLinkClick={handleOpenRegisterModal}
    >
      <div className="modal__input_wrapper">
        <label className="modal__label_input">
          Email{" "}
          <input
            type="email"
            name="email"
            maxLength="100"
            placeholder="Email"
            className="modal__input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
      </div>
      <div className="modal__input_wrapper">
        <label className="modal__label_input">
          Password{" "}
          <input
            type="password"
            name="password"
            minLength="8"
            maxLength="100"
            placeholder="Password"
            className="modal__input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
