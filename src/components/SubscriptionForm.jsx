import React, { useState, useEffect } from "react";

const SubscriptionForm = () => {
    const [email, setEmail] = useState(""); // Состояние для ввода email
    const [isSubscribed, setIsSubscribed] = useState(false); // Состояние для подписки

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        setIsSubscribed(true); // Устанавливаем состояние подписки
    };

    useEffect(() => {
        if (isSubscribed) {
            console.log(`User subscribed with email: ${email}`);
            // Можно добавить логику, например, отправку данных на сервер
        }
    }, [isSubscribed]); // useEffect срабатывает только при изменении isSubscribed

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-10 bg-light">
            <div className="card shadow-sm p-4" style={{ maxWidth: "61%", width: "100%" }}>
                {isSubscribed ? (
                    <div className="alert alert-success text-center m-0">
                        <h5 className="mb-0">Спасибо за подписку!</h5>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h5 className="text-center mb-3">Подписка на новости</h5>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">
                                Введите ваш email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div id="emailHelp" className="form-text">
                                Мы не будем делиться вашим email.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Подписаться
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SubscriptionForm;
