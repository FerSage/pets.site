import React, { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
import '../css/Search.css';
 
function Search() {
  const [region, setRegion] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resultsPerPage = 3;
 
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://pets.сделай.site/api/pets');
        const data = await response.json();
 
        if (data && data.data && data.data.orders) {
          setAds(data.data.orders);
          setTotalPages(Math.ceil(data.data.orders.length / resultsPerPage));
        } else {
          setAds([]);
          setTotalPages(1);
        }
      } catch (error) {
        setErrorMessage('Ошибка при загрузке данных. Попробуйте позже.');
        console.error('Ошибка:', error.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchAds();
  }, []);
 
  const handleSearch = () => {
    if (!region && !animalType) {
      setErrorMessage('Необходимо указать район или вид животного для поиска.');
      return;
    }
    setErrorMessage('');
 
    const filteredAds = ads.filter((ad) => {
      const matchesRegion = region
        ? ad.district.toLowerCase().includes(region.toLowerCase())
        : true;
      const matchesAnimalType = animalType
        ? ad.kind.toLowerCase().includes(animalType.toLowerCase())
        : true;
      return matchesRegion && matchesAnimalType;
    });
 
    setAds(filteredAds);
    setTotalPages(Math.ceil(filteredAds.length / resultsPerPage));
    setCurrentPage(1);
  };
 
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
 
  const indexOfLastAd = currentPage * resultsPerPage;
  const indexOfFirstAd = indexOfLastAd - resultsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);
 
  return (
    <main className="container mt-5">
      <h2 className="text-center mb-4">Поиск объявлений о животных</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="mb-3">
          <label htmlFor="animalTypeInput" className="form-label">
            Вид животного
          </label>
          <input
            type="text"
            className="form-control"
            id="animalTypeInput"
            placeholder="Введите вид животного (например, кошка, собака)"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="regionInput" className="form-label">
            Район
          </label>
          <input
            type="text"
            className="form-control"
            id="regionInput"
            placeholder="Введите район"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Найти объявления
        </button>
      </form>
 
      {loading && <p className="text-center mt-4">Загрузка...</p>}
 
      {!loading && errorMessage && (
        <p className="text-danger text-center mt-4">{errorMessage}</p>
      )}
 
      {!loading && !errorMessage && ads.length === 0 && (
        <p className="text-center mt-4">Объявлений не найдено.</p>
      )}
 
      {!loading && ads.length > 0 && (
        <>
          <div id="adsContainer" className="mt-4">
            {currentAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${
                  currentPage === 1 ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Предыдущая
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Следующая
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </main>
  );
}
 
export default Search;