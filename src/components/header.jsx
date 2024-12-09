import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../image/logo.jpg';

const Header = () => {
    useEffect(() => {
        const forms = document.querySelectorAll("form");

        forms.forEach(form => {
            form.addEventListener("submit", event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                const password = form.querySelector("#passwordInput");
                const confirmPassword = form.querySelector("#passwordConfirmInput");
                if (password && confirmPassword && password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Пароли не совпадают");
                } else if (confirmPassword) {
                    confirmPassword.setCustomValidity("");
                }

                form.classList.add("was-validated");
            });
        });

        const phoneInput = document.getElementById("phoneInput");
        if (phoneInput) {
            phoneInput.addEventListener("input", () => {
                const phonePattern = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
                if (!phonePattern.test(phoneInput.value)) {
                    phoneInput.setCustomValidity("Введите телефон в формате +7 XXX XXX XX XX");
                } else {
                    phoneInput.setCustomValidity("");
                }
            });
        }

        return () => {
            forms.forEach(form => form.removeEventListener("submit", null));
            if (phoneInput) phoneInput.removeEventListener("input", null);
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            className="w-25 rounded-3"
                            alt="logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" style={{ color: 'black' }}>
                                    Главная
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link" style={{ color: 'black' }}>
                                    Личный кабинет
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-post" className="nav-link" style={{ color: 'black' }}>
                                    Добавить объявление
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className="nav-link" style={{ color: 'black' }}>
                                    Поиск по объявлениям
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button
                                type="button"
                                className="btn btn-primary m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#registerModal"
                            >
                                Регистрация
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#loginModal"
                            >
                                Вход
                            </button>
                        </div>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                list="pets"
                                placeholder="Поиск"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="button">
                                Поиск
                            </button>
                            <datalist id="pets">
                                <option value="Кошка" />
                                <option value="Собака" />
                                <option value="Корова" />
                                <option value="Крокодил" />
                                <option value="Сова" />
                            </datalist>
                        </form>
                    </div>
                </div>
            </nav>

{/* Register Modal */}
<div
                className="modal fade"
                id="registerModal"
                tabIndex="-1"
                aria-labelledby="registerModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="registerModalLabel" style={{ color: 'black' }}>
                                Регистрация
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <form noValidate>
                                <div className="mb-3">
                                    <label htmlFor="nameInput" className="form-label" style={{ color: 'black' }}>
                                        ФИО
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        placeholder="Введите ваше имя"
                                        required
                                    />
                                    <div className="invalid-feedback">Заполните поле с ФИО.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneInput" className="form-label" style={{ color: 'black' }}>
                                        Телефон
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneInput"
                                        placeholder="+7 XXX XXX XX XX"
                                        required
                                    />
                                    <div className="invalid-feedback">Введите корректный номер телефона.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label" style={{ color: 'black' }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="Введите ваш email"
                                        required
                                    />
                                    <div className="invalid-feedback">Заполните поле с email.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label" style={{ color: 'black' }}>
                                        Пароль
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        placeholder="Введите пароль"
                                        required
                                    />
                                    <div className="invalid-feedback">Заполните поле с паролем.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordConfirmInput" className="form-label" style={{ color: 'black' }}>
                                        Подтверждение пароля
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordConfirmInput"
                                        placeholder="Повторите пароль"
                                        required
                                    />
                                    <div className="invalid-feedback">Пароли не совпадают.</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="dataAgreementCheck" required />
                                    <label className="form-check-label" htmlFor="dataAgreementCheck" style={{ color: 'black' }}>
                                        Я соглашаюсь на обработку данных
                                    </label>
                                    <div className="invalid-feedback">Вы должны согласиться на обработку данных.</div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Зарегистрироваться
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>

                {/* Модальное окно для входа */}
    <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="loginModalLabel" style={{ color: 'black' }}>
                        Вход
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                    <form noValidate>
                        <div className="mb-3">
                            <label htmlFor="loginEmailInput" className="form-label" style={{ color: 'black' }}>
                                Email
                            </label>
                            <input type="email" className="form-control" id="loginEmailInput" required />
                            <div className="invalid-feedback">Заполните поле с email.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPasswordInput" className="form-label" style={{ color: 'black' }}>
                                Пароль
                            </label>
                            <input type="password" className="form-control" id="loginPasswordInput" required />
                            <div className="invalid-feedback">Заполните поле с паролем.</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                            <label className="form-check-label" htmlFor="rememberMeCheck" style={{ color: 'black' }}>
                                Запомнить меня
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Войти
                        </button>
                    </form>
                </div>
                <div className="modal-footer">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal" style={{ marginRight: '10px' }}>
                        Забыли пароль?
                    </a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#forgotLoginModal">
                        Забыли логин?
                    </a>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    </div>

    {/* Модальное окно "Забыли пароль?" */}
    <div
        className="modal fade"
        id="forgotPasswordModal"
        tabIndex="-1"
        aria-labelledby="forgotPasswordModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="forgotPasswordModalLabel" style={{ color: 'black' }}>
                        Восстановление пароля
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                    <form noValidate>
                        <div className="mb-3">
                            <label htmlFor="resetPasswordEmailInput" className="form-label" style={{ color: 'black' }}>
                                Введите ваш email для восстановления пароля
                            </label>
                            <input type="email" className="form-control" id="resetPasswordEmailInput" required />
                            <div className="invalid-feedback">Заполните поле с email.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    {/* Модальное окно "Забыли пароль?" */}
    <div
        className="modal fade"
        id="forgotLoginModal"
        tabIndex="-1"
        aria-labelledby="forgotLoginModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="forgotLoginModalLabel" style={{ color: 'black' }}>
                        Восстановление логина
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                    <form noValidate>
                        <div className="mb-3">
                            <label htmlFor="resetLoginEmailInput" className="form-label" style={{ color: 'black' }}>
                                Введите ваш email для восстановления логина
                            </label>
                            <input type="email" className="form-control" id="resetLoginEmailInput" required />
                            <div className="invalid-feedback">Заполните поле с email.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </header>
    );
};

export default Header;
