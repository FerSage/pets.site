import React, { useState } from 'react';


const New = () => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      animalType: "",
      description: "",
      region: "",
      date: "",
    });
  
    const [registrationData, setRegistrationData] = useState({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    });
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      alert("Заявление подано!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        animalType: "",
        description: "",
        region: "",
        date: "",
      });
    };
  
    const handleRegistrationSubmit = (e) => {
      e.preventDefault();
      if (registrationData.password !== registrationData.confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }
      alert("Регистрация завершена!");
      setRegistrationData({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });
    };
  
    return (
      <div>
        <header className="bg-primary text-white p-3 text-center">
          <h1>Заявление о пропаже животного</h1>
        </header>
  
        <main className="container my-4">
          <div className="form-container bg-white p-4 rounded shadow">
            <h3 className="mb-3">Форма подачи заявления</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Телефон</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Введите ваш номер телефона"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Введите ваш email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="animalType" className="form-label">Вид животного</label>
                <input
                  type="text"
                  className="form-control"
                  id="animalType"
                  placeholder="Например: собака, кот"
                  value={formData.animalType}
                  onChange={(e) =>
                    setFormData({ ...formData, animalType: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Описание</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="Опишите животное и где его видели"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="region" className="form-label">Район</label>
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  placeholder="Например: Центральный"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Дата</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  placeholder="Введите дату в формате: день-месяц-год"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  pattern="^([0-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$"
                  required
                />
                <div className="form-text">Формат даты: день-месяц-год (например, 25-12-2024).</div>
              </div>
              <div className="mb-3">
                <label htmlFor="animalPhoto" className="form-label">Фото животного</label>
                <input type="file" className="form-control" id="animalPhoto" accept="image/*" required />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dataAgreementCheck"
                  required
                />
                <label htmlFor="dataAgreementCheck" className="form-check-label">
                  Я соглашаюсь на обработку данных
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Подать заявление</button>
            </form>
          </div>
  
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#registrationModal"
            >
              Регистрация
            </button>
          </div>
  
          {/* Регистрационное модальное окно */}
          <div
            className="modal fade"
            id="registrationModal"
            tabIndex="-1"
            aria-labelledby="registrationModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Регистрация</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleRegistrationSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">ФИО</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Введите ваше имя"
                        value={registrationData.fullName}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Телефон</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Введите ваш номер телефона"
                        value={registrationData.phone}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Введите ваш email"
                        value={registrationData.email}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Пароль</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Введите пароль"
                        value={registrationData.password}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Повторите пароль"
                        value={registrationData.confirmPassword}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, confirmPassword: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agree"
                        checked={registrationData.agree}
                        onChange={(e) =>
                          setRegistrationData({ ...registrationData, agree: e.target.checked })
                        }
                        required
                      />
                      <label htmlFor="agree" className="form-check-label">
                        Согласен с условиями использования
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default New;