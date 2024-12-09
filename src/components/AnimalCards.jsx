import React, { useState } from "react";
import CatImage from "../image/Cat.jpg";
import GoatImage from "../image/Goat.jpg";
import DogImage from "../image/Dog.jpg";
import HomyakImage from "../image/homyak.jpg";
import HorseImage from "../image/horse.webp";
import KrokoImage from "../image/kroko.webp";
import KrolikImage from "../image/krolik.webp";
import BirdImage from "../image/bird.webp";
import NinjiaImage from "../image/ninjia.jpg";
import "../css/AnimalCards.css"

const AnimalCards = () => {
    const animals = [
        { id: 2, kind: "Кошка", description: "Очень пушистая и ласковая.", image: CatImage, district: "Центральный", modalId: "modal1" },
        { id: 3, kind: "Коза", description: "Пуховая коза с белой шерстью.", image: GoatImage, district: "Василеостровский", modalId: "modal2" },
        { id: 1, kind: "Собака", description: "Добрая собака с рыжей шерстью.", image: DogImage, district: "Центральный", modalId: "modal3" },
        { id: 4, kind: "Кролик", description: "Маленький белый кролик.", image: KrolikImage, district: "Петроградский", modalId: "modal4" },
        { id: 5, kind: "Попугай", description: "Попугай с яркими перьями.", image: BirdImage, district: "Выборгский", modalId: "modal5" },
        { id: 6, kind: "Хомяк", description: "Хомяк с пушистыми лапками.", image: HomyakImage, district: "Центральный", modalId: "modal6" },
        { id: 7, kind: "Черепаха", description: "Маленькая черепаха с зелёным панцирем.", image: NinjiaImage, district: "Калининский", modalId: "modal7" },
        { id: 8, kind: "Крокодил", description: "Экзотический крокодил.", image: KrokoImage, district: "Кировский", modalId: "modal8" },
        { id: 9, kind: "Лошадь", description: "Мощная и красивая лошадь.", image: HorseImage, district: "Петроградский", modalId: "modal9" },
      ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = animals.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(animals.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">
            {/* Карточки животных */}
            <div className="row">
                {currentItems.map((animal) => (
                    <div className="col-md-4 mb-4" key={animal.id}>
                        <div className="card">
                            <img src={animal.image} className="card-img-top" alt={animal.name} />
                            <div className="card-body">
                                <h5 className="card-title">{animal.name}</h5>
                                <p className="card-text text-clip" title={animal.description}>
                                    {animal.description}
                                </p>
                                <button
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${animal.modalId}`}
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Пагинация */}
            <nav>
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index + 1}
                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Модальные окна */}
            {animals.map((animal) => (
                <div
                    className="modal fade"
                    id={animal.modalId}
                    tabIndex="-1"
                    aria-labelledby={`${animal.modalId}Label`}
                    aria-hidden="true"
                    key={animal.id}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${animal.modalId}Label`}>
                                    Информация о {animal.name}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID:</strong> {animal.id}</p>
                                <p><strong>Вид животного:</strong> {animal.kind}</p>
                                <p><strong>Описание:</strong> {animal.description}</p>
                                <p><strong>Район:</strong> {animal.district}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimalCards;
