import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import AnimalDetailCard from '../components/AnimalDetailCard';

const AnimalDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const animal = location.state?.animal;

  if (!animal) {
    console.error("Ошибка: Животное не найдено.");
    return (
      <div className="container text-center py-5">
        <h2 className="text-danger">Животное не найдено</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Вернуться на главную
        </button>
      </div>
    );
  }

  return <AnimalDetailCard animal={animal} />;
};

export default AnimalDetail;