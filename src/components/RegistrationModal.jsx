import React, { useState } from 'react';

const RegistrationModal = () => {
    const [error, setError] = useState(null); // Состояние для хранения ошибок
    const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса

    const validateName = (name) => /^[А-Яа-яЁё\s\-]+$/.test(name); // Только кириллица, пробел и дефис
    const validatePhone = (phone) => /^\+?\d+$/.test(phone); // Только цифры и +
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/.test(password); // Минимум 7 символов, 1 строчная, 1 заглавная, 1 цифра

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвратить стандартное поведение формы

        // Сбор данных из формы
        const name = document.getElementById('nameInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
        const passwordConfirm = document.getElementById('passwordConfirmInput').value.trim();

        // Очистка ошибок перед новой валидацией
        setError(null);

        // Валидация данных
        if (!validateName(name)) {
            setError('Имя должно содержать только кириллицу, пробелы или дефисы.');
            return;
        }
        if (!validatePhone(phone)) {
            setError('Телефон должен содержать только цифры и может начинаться с +.');
            return;
        }
        if (!email.includes('@')) {
            setError('Введите корректный email.');
            return;
        }
        if (!validatePassword(password)) {
            setError(
                'Пароль должен содержать минимум 7 символов, включая одну строчную, одну заглавную букву и одну цифру.'
            );
            return;
        }
        if (password !== passwordConfirm) {
            setError('Пароли не совпадают.');
            return;
        }
        if (!isChecked) {
            setError('Вы должны согласиться на обработку персональных данных.');
            return;
        }

        try {
            // Отправка данных на сервер
            const response = await fetch('https://pets.сделай.site/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    password,
                    password_confirmation: passwordConfirm,
                    confirm: 1,
                }),
            });

            if (response.status === 204) {
                console.log('Регистрация прошла успешно!');
            } else if (response.status === 422) {
                const errorData = await response.json();
                setError(
                    errorData.error?.message || 'Ошибка валидации данных.'
                );
            } else {
                setError('Произошла неизвестная ошибка.');
            }
        } catch (error) {
            setError('Ошибка сети. Попробуйте позже.');
        }
    };

    return (
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="registerModalLabel">Регистрация</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">ФИО</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Введите ваше имя"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneInput" className="form-label">Телефон</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneInput"
                                    placeholder="+7 XXX XXX XX XX"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Введите ваш email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Пароль</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Введите пароль"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmInput" className="form-label">Подтверждение пароля</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordConfirmInput"
                                    placeholder="Повторите пароль"
                                    required
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="agreeCheck"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                                <label className="form-check-label" htmlFor="agreeCheck">
                                    Я согласен на обработку персональных данных
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                        </form>
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
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
