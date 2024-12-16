import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE_URL = 'https://pets.сделай.site';

const AnimalCard = ({ animal }) => {
    const location = useLocation();
    const isSearchPage = location.pathname === '/search';

    useEffect(()=>{alert(animal.kind)})

    return (
      <div className="col">
        <div className="card shadow h-100">
          <img
            src={animal.photos.startsWith('http') ? animal.photos : `${BASE_URL}${animal.photos}`}
            className="card-img-top"
            alt={animal.kind}
            style={{ height: '300px', objectFit: 'fill' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">
              {animal.kind.charAt(0).toUpperCase() + animal.kind.slice(1)}
            </h5>
            <ul className="list-unstyled text-center mb-4">
              <li>
                <strong>Дата:</strong> {animal.date}
              </li>
              <li>
                <strong>Район:</strong> {animal.district}
              </li>
              <li>
                <strong>Клеймо:</strong>{' '}
                <span className="badge bg-info text-dark">{animal.mark || 'Не указано'}</span>
              </li>
            </ul>
            <Link
              to={isSearchPage ? `/search/animal/${animal.id}` : `/animal/${animal.id}`}
              state={{ animal, from: location.pathname }}
              className="btn btn-primary w-100 mt-auto"
              data-bs-toggle="modal"
              data-bs-target={`#modal${animal.id}`} // Отправляем на модальное окно
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default AnimalCard;