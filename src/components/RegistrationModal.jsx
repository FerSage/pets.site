import React, { useState } from 'react';

const RegistrationModal = () => {
    const [token, setToken] = useState(null); // Состояние для хранения токена
    const [error, setError] = useState(null); // Состояние для хранения ошибок
    const [isChecked, setIsChecked] = useState(false); // Состояние для чекбокса

    // Функция для обработки отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвратить стандартное поведение формы

        // Сбор данных из формы
        const name = document.getElementById('nameInput').value;
        const phone = document.getElementById('phoneInput').value;
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        const passwordConfirm = document.getElementById('passwordConfirmInput').value;

        // Проверка, совпадает ли пароль с подтверждением
        if (password !== passwordConfirm) {
            alert('Пароли не совпадают');
            return;
        }

        // Проверка, был ли выбран чекбокс
        if (!isChecked) {
            alert('Вы должны согласиться с условиями');
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
                }),
            });

            // Проверка успешности запроса
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка при регистрации');
            }

            // Получение данных из ответа сервера (например, токен)
            const data = await response.json();
            setToken(data.token); // Сохраняем токен в состоянии

            alert('Регистрация прошла успешно! Токен: ' + data.token);
        } catch (error) {
            setError(error.message); // Устанавливаем ошибку в состояние
            alert('Ошибка: ' + error.message);
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
                            {/* Регистрационные поля */}
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
                            {/* Чекбокс для согласия с условиями */}
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
                        {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Показываем ошибку, если она есть */}
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
