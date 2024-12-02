import React from "react";
import Dog from '../image/Dog.jpg';
import Rat from '../image/Rat.jpg';
import Monkey from '../image/Monkey.jpg';

const Slider = () => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide m-auto w-75 p-2"
            data-bs-ride="carousel"
            style={{ minHeight: "400px" }}
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={Dog}
                        className="d-block mx-auto"
                        alt="Собака"
                        style={{ width: "500px", height: "auto" }}
                    />
                    <div className="text-center mt-3">
                        <h2>Найдена собака</h2>
                        <p>Собака рыжая, была утеряна в Красногвардейском районе</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={Rat}
                        className="d-block mx-auto"
                        alt="Мышь"
                        style={{ width: "500px", height: "auto" }}
                    />
                    <div className="text-center mt-3">
                        <h2>Найдена мышь</h2>
                        <p>Мышь серая, была утеряна в Центральном районе</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={Monkey}
                        className="d-block mx-auto"
                        alt="Горилла"
                        style={{ width: "500px", height: "auto" }}
                    />
                    <div className="text-center mt-3">
                        <h2>Найдена горилла</h2>
                        <p>Горилла, была утеряна в Красногвардейском районе</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    style={{ backgroundColor: "black" }}
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    style={{ backgroundColor: "black" }}
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
};

export default Slider;
