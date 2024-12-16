import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimalDetailCard = ({ animal }) => {
    const navigate = useNavigate();
    const BASE_URL = "https://pets.сделай.site";

    if (!animal) {
        return (
            <div className="container text-center py-5">
                <h2 className="text-danger">Животное не найдено</h2>
                <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                    Вернуться на главную
                </button>
            </div>
        );
    }

    return (
        <div
            className="container d-flex align-items-center
justify-content-center py-5"
            style={{ minHeight: '95vh' }}
        >
            <div
                className="card shadow-lg overflow-hidden w-100"
                style={{
                    maxWidth: '900px',
                    borderRadius: '15px',
                }}
            >
                <div className="row g-0">
                    <div className="col-md-5 d-flex">
                        <img
                            src={
                                animal.photos && animal.photos.startsWith('http')
                                    ? animal.photos
                                    : `${BASE_URL}${animal.photos || '/placeholder.png'}`
                            }
                            alt={animal.kind}
                            className="img-fluid rounded-start"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{animal.name ||
                                'Имя не указано'}</h2>
                            <h5 className="text-muted mb-4">{animal.kind || 'Тип неуказан'}</h5>
                            <p className="lead mb-4">{animal.description ||
                                'Описание отсутствует.'}</p>
                            <ul className="list-unstyled">
                                <li><strong>Клеймо:</strong> {animal.mark || 'Не указано'}</li>
                                <li><strong>Район:</strong> {animal.district || 'Неуказан'}</li>
                                <li><strong>Дата:</strong> {animal.date || 'Не указана'}</li>
                                <li><strong>Телефон:</strong> <a
                                    href={`tel:${animal.phone}`} className="link-primary">{animal.phone ||
                                        'Не указан'}</a></li>
                            </ul>
                            <button onClick={() => navigate(-1)} className="btn
btn-secondary mt-4">Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailCard;