import React, { useState } from 'react';

const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Валидация перед отправкой
        if (!email || !password) {
            setErrorMessage('Все поля обязательны для заполнения.');
            return;
        }

        try {
            const response = await fetch('https://pets.сделай.site/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('Токен:', data.data.token); // Токен выводится в консоль
                setSuccessMessage('Успешный вход в систему!');
            } else if (response.status === 422) {
                const errorData = await response.json();
                setErrorMessage(
                    errorData.error?.message || 'Ошибка валидации данных'
                );
            } else {
                setErrorMessage('Произошла неизвестная ошибка.');
            }
        } catch (error) {
            setErrorMessage('Ошибка сети. Попробуйте позже.');
        }
    };

    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel">Вход</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="loginEmailInput" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmailInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPasswordInput" className="form-label">Пароль</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="loginPasswordInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
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
