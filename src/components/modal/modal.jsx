import { useState } from "react";

import './modal.scss';

const initialValue = { name: "name", email: "email@email.com", password: "password" };

const Modal = ({ modalType = 'registration' }) => {
  const [formFields, setformFields] = useState(initialValue);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const onChange = (value, parameter) => {
    setformFields((prev) => ({ ...prev, [parameter]: value }));
  };

  const togglePasswordVisible = () => {
    setPasswordVisible((prev) => !prev);
  }

  const handleClose = (e) => {
    e.preventDefault();
    setModalVisible(false);
    console.log('CLOSE CLICK');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formFields.email && formFields.password) {
      if (modalType === 'registration' && formFields.name) {
        console.log('REGISTRATION', formFields);
      }

      if (modalType === 'login') {
        console.log('LOGIN', formFields);
      }

    } else if (modalType === 'registration') {
      console.log('REGISTRATION CLICK')
    } else if (modalType === 'login') {
      console.log('LOGIN CLICK');
    }
  };

  return (
    <section className={`modal${modalVisible ? '' : ' modal--invisible'}`}>
        <div className="modal__window">
          <form
            className="modal__form modal-form"
            encType="multipart/form-data"
            method="post"
          >
            <div className="modal-form__wrap-title">
              <h2 className="modal-form__title">{modalType === 'registration' ? "Регистрация" : "Вход в аккаунт"}</h2>
              <button
                className="modal-form__btn modal-form__btn--closed"
                onClick={handleClose}
              >
                <span className="visually-hidden">Закрыть</span>
              </button>
            </div>

            {modalType === 'registration' &&
              <>
                <label
                  htmlFor="name"
                  className="modal-form__label"
                >
                  Имя и фамилия
                </label>
                <input
                  value={formFields.name}
                  onChange={(e) => onChange(e.target.value, "name")}
                  className="modal-form__input"
                  type="text"
                  id="name"
                />
              </>
            }

            <label
              htmlFor="email"
              className="modal-form__label"
            >
              Email
            </label>
            <input
              value={formFields.email}
              onChange={(e) => onChange(e.target.value, "email")}
              className="modal-form__input"
              type="email"
              id="email"
            />

            {/* Input password */}
            <label
              htmlFor="password"
              className="modal-form__label"
            >
              Пароль
            </label>
            <div className="modal-form__wrap-password">
              <input
                value={formFields.password}
                onChange={(e) => onChange(e.target.value, "password")}
                className="modal-form__input modal-form__input--password"
                type={passwordVisible ? "text" : "password"}
                id="password"
              />
              <label className="modal-form__wrap-password-checkbox">
                <input
                  onClick={togglePasswordVisible}
                  type="checkbox"
                  className="modal-form__password-checkbox"
                />
                <span className="visually-hidden">
                  {passwordVisible ? "Скрыть пароль" : "Показать пароль"}
                </span>
              </label>
            </div>

            <input
              className="btn btn--yellow modal-form__btn modal-form__btn--submit"
              type="submit"
              onClick={handleSubmit}
              value={modalType === 'registration' ? "Зарегистрироваться" : "Войти"}
            />


          </form>
        </div>
      </section >
      );
};

      export default Modal;
