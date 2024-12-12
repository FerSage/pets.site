import React, { useState, useEffect } from 'react';



function Slide({ data, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <h2 className="text-center text-white">{data.title}</h2>
      <p className="text-center" style={{ color: 'white', fontWeight: 'bold' }}>
        {data.description}
      </p>
      <img
        src={`https://pets.xn--80ahdri7a.site/${data.image}`}
        className="d-block m-auto"
        alt={data.title}
        style={{
          height: '200px',
          borderRadius: '10%',
          paddingBottom: '10px',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

function Loader({ display }) {
  return (
    <div className="justify-content-center align-items-center" style={display}>
      <div className="fs-1 text-success">...Идет загрузка</div>
    </div>
  );
}

function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = async () => {
    try {
      const response = await fetch('https://pets.xn--80ahdri7a.site/api/pets/slider');    
      const data = await response.json();
      setSliderData(data.data.pets || []);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const slides = sliderData.map((slide, index) => (
    <Slide key={index} data={slide} isActive={index === activeIndex} />
  ));

  const indicators = sliderData.map((_, index) => (
    <button
      key={index}
      type="button"
      onClick={() => handleIndicatorClick(index)}
      className={index === activeIndex ? 'active' : ''}
      aria-current={index === activeIndex ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        margin: '0 5px',
        backgroundColor: index === activeIndex ? 'black' : 'gray',
        border: 'none',
        cursor: 'pointer',
      }}
    />
  ));

  return (
    <div>
      <Loader display={{ display: loading ? 'flex' : 'none' }} />
      {!loading && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide m-auto w-75 p-2"
          style={{ background: 'linear-gradient(135deg, #320cdd, #528edd)', borderRadius: 10 }}
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">{indicators}</div>
          <div className="carousel-inner">{slides}</div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              &#8592;
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              &#8594;
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Slider;
