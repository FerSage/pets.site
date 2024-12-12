import React from 'react';

const LoginModal = () => {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel">Вход</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form noValidate>
                            <div className="mb-3">
                                <label htmlFor="loginEmailInput" className="form-label">Email</label>
                                <input type="email" className="form-control" id="loginEmailInput" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPasswordInput" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="loginPasswordInput" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Войти</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Забыли пароль?</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#forgotLoginModal">Забыли логин?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
