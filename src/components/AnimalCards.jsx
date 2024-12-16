import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/AnimalCards.css';
import AnimalCard from './AnimalCard';

const BASE_URL = 'https://pets.сделай.site';

const AnimalCards = (district, kind) => {

  const [animals, setAnimals] = useState([]); // Состояние для хранения данных животных
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    // Загружаем данные с сервера
    const fetchAnimals = async () => {
      try {
        const response = await fetch(`https://pets.сделай.site/api/search/order?district=${district}&kind=${kind}`);
        const data =  response.json();
        console.log(district);
        if (data && data.data && data.data.orders) {
          setAnimals(data.data.orders); // Сохраняем данные в состояние
        } else {
          setAnimals([]);
        }
      } catch (error) {
        setErrorMessage('Ошибка при загрузке данных. Попробуйте позже.');
        console.error('Ошибка:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []); // Пустой массив зависимостей, чтобы загрузка происходила только один раз

  // Если данные еще не загружены, показываем сообщение
  if (loading) {
    return <div>Загружаем данные...</div>;
  }

  if (errorMessage) {
    return <div className="text-danger">{errorMessage}</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = animals.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(animals.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Компонент для отображения карточки животного
  

  return (
    <div className="container">
      {/* Карточки животных */}
      <div className="row">
        {currentItems.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} /> // Используем новый компонент
        ))}
      </div>

      

      {/* Модальные окна */}
      {animals.map((animal) => (
        <div
          className="modal fade"
          id={`modal${animal.id}`}
          tabIndex="-1"
          aria-labelledby={`modal${animal.id}Label`}
          aria-hidden="true"
          key={animal.id}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`modal${animal.id}Label`}>
                  Информация о {animal.kind}
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
                {/* Номера телефона */}
                {animal.phoneNumbers && animal.phoneNumbers.length > 0 ? (
                  <div>
                    <strong>Телефоны:</strong>
                    <ul>
                      {animal.phoneNumbers.map((phone, index) => (
                        <li key={index}>{phone}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p><strong>Телефон:</strong> Не указан</p>
                )}
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
