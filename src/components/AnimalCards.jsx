import React from "react";
import Cat from '../image/Cat.jpg';
import Goat from '../image/Goat.jpg';

const AnimalCards = () => {
    return (
        <div className="d-flex flex-row flex-wrap">
            <div
                className="d-flex flex-row flex-wrap border m-3 p-3"
                style={{ minWidth: "300px", width: "45%" }}
            >
                <img
                    src={Cat}
                    className="w-75"
                    alt="Кошка"
                />
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>id:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>14</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Вид животного:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>Кошка</p>
                <p className="w-50 text-primary" style={{ minWidth: "300px" }}>Описание:</p>
                <p className="w-50" style={{ minWidth: "300px" }}>
                    Потерялась кошка, пушистая, серая. Любит играть, ласковая.
                </p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Номер чипа:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>ca-001-spb</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Район:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>Василиостровский</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Дата:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>24-03-2020</p>
            </div>
            <div
                className="d-flex flex-row flex-wrap border m-3 p-3"
                style={{ minWidth: "300px", width: "45%" }}
            >
                <img
                    src={Goat}
                    className="w-75"
                    alt="Коза"
                />
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>id:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>18</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Вид животного:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>Коза</p>
                <p className="w-50 text-primary" style={{ minWidth: "300px" }}>Описание:</p>
                <p className="w-50" style={{ minWidth: "300px" }}>
                    Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.
                </p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Номер чипа:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>go-011-spb</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Район:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>Центральный</p>
                <p className="w-50 text-primary" style={{ minWidth: "250px" }}>Дата:</p>
                <p className="w-50" style={{ minWidth: "250px" }}>14-03-2022</p>
            </div>
        </div>
    );
};

export default AnimalCards;
