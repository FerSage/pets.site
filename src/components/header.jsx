import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpg';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import ForgotLoginModal from './ForgotLoginModal';
import QuickSearch from './QuickSearch'; // Импортируем компонент быстрого поиска

const Header = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    // Функция для управления состоянием навигационного меню
    const handleNavbarCollapse = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="w-25 rounded-3" alt="logo" />
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
                            <li className="nav-item"><Link to="/" className="nav-link">Главная</Link></li>
                            <li className="nav-item"><Link to="/profile" className="nav-link">Личный кабинет</Link></li>
                            <li className="nav-item"><Link to="/add-post" className="nav-link">Добавить объявление</Link></li>
                            <li className="nav-item"><Link to="/search" className="nav-link">Поиск по объявлениям</Link></li>
                        </ul>
                        
                        {/* Вставляем компонент QuickSearch */}
                        <QuickSearch 
                            host="https://pets.сделай.site"
                            handleNavbarCollapse={handleNavbarCollapse}
                        />

                        <div className="d-flex">
                            <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#registerModal">Регистрация</button>
                            <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#loginModal">Вход</button>
                        </div>
                    </div>
                </div>
            </nav>

            <RegistrationModal />
            <LoginModal />
            <ForgotPasswordModal />
            <ForgotLoginModal />
        </header>
    );
};

export default Header;
