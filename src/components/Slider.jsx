import React from 'react';

const Slider = ({ slides }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide m-auto w-75 p-2"
      data-bs-ride="carousel"
      style={{ minHeight: '400px' }}
    >
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              className="d-block mx-auto"
              alt={slide.altText}
              style={{ width: '500px', height: 'auto' }}
            />
            <div className="text-center mt-3">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{ backgroundColor: 'black' }}
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
          style={{ backgroundColor: 'black' }}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
};

export default Slider;
