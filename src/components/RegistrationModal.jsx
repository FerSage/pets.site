import React from 'react';

const RegistrationModal = () => {
    return (
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="registerModalLabel">Регистрация</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form noValidate>
                            {/* Registration form fields here */}
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">ФИО</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Введите ваше имя" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneInput" className="form-label">Телефон</label>
                                <input type="tel" className="form-control" id="phoneInput" placeholder="+7 XXX XXX XX XX" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email</label>
                                <input type="email" className="form-control" id="emailInput" placeholder="Введите ваш email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmInput" className="form-label">Подтверждение пароля</label>
                                <input type="password" className="form-control" id="passwordConfirmInput" placeholder="Повторите пароль" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
