import React, { useState } from "react";
import Dog from "../image/Dog.jpg";
import Cat from "../image/Cat.jpg";
import Goat from "../image/Goat.jpg";
import "../css/Profile.css";

const Profile = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Массив животных для отображения на карточках
    const animals = [
        {
            id: 1,
            name: "Собака",
            description: "Собака рыжая, была утеряна в Красногвардейском районе.",
            image: Dog,
            modalId: "animalModal1"
        },
        {
            id: 2,
            name: "Кошка",
            description: "Потерялась кошка, пушистая, серая. Любит играть, ласковая.",
            image: Cat,
            modalId: "animalModal2"
        },
        {
            id: 3,
            name: "Коза",
            description: "Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург.",
            image: Goat,
            modalId: "animalModal3"
        },
    ];

    // Обработчик выхода
    const handleLogout = () => {
        alert("Вы вышли из аккаунта.");
        // Здесь может быть логика для выхода из аккаунта
    };

    return (
        <main className="container mt-5">
            <div className="profile-container">
                <h3>Профиль</h3>
                <p><strong>ФИО:</strong> Иванов Иван Иванович</p>
                <p><strong>Почта:</strong> ivanov@example.com</p>
                <p><strong>Телефон:</strong> +7 123 456-78-90</p>
                <p><strong>Дата регистрации:</strong> 27-11-2024</p>
                <button className="btn btn-primary mt-3" onClick={() => alert("Редактирование информации пользователя.")}>
                    Редактировать информацию
                </button>
            </div>

            {/* Карточки животных */}
            <div className="card-container mt-4">
                {animals.map((animal) => (
                    <div className="card" key={animal.id}>
                        <img src={animal.image} alt={animal.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{animal.name}</h5>
                            <p className="card-text text-clip">{animal.description}</p>
                            <button type="button" className="btn btn-view" data-bs-toggle="modal"
                                    data-bs-target={`#${animal.modalId}`}>
                                Посмотреть
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Модальные окна для животных */}
            {animals.map((animal) => (
                <div className="modal fade" id={animal.modalId} tabIndex="-1" aria-labelledby={`${animal.modalId}Label`} aria-hidden="true" key={animal.id}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${animal.modalId}Label`}>Информация о животном</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID:</strong> {animal.id}</p>
                                <p><strong>Вид животного:</strong> {animal.name}</p>
                                <p><strong>Описание:</strong> {animal.description}</p>
                                <p><strong>Номер чипа:</strong> {animal.id}-spb</p>
                                <p><strong>Район:</strong> Василиостровский</p>
                                <p><strong>Дата:</strong> 22-07-2023</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Кнопка выхода */}
            <div className="text-center mt-4">
                <button className="btn btn-danger" onClick={handleLogout}>Выйти</button>
            </div>
        </main>
    );
};

export default Profile;
