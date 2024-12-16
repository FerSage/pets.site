import React, { useState } from 'react';
import AnimalCards from '../components/AnimalCards';

const SearchResults = ({ results, totalPages }) => {
  const [page, setPage] = useState(1);

  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNextPage = () => setPage((prevPage) => Math.min(prevPage
+ 1, totalPages));

  const paginatedResults = results.slice((page - 1) * 6, page * 6);

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {paginatedResults.length > 0 ? (
          paginatedResults.map((animal) => <AnimalCards key={animal.id}
animal={animal} />)
        ) : (
          <div className="col-12 text-center text-danger">Нет
объявлений для этого поиска</div>
        )}
      </div>

      {results.length > 0 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrevPage}>
                  Назад
                </button>
              </li>
              <li className="page-item">
                <span className="page-link">
                  Страница {page} из {totalPages}
                </span>
              </li>
              <li className={`page-item ${page === totalPages ?
'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage}>
                  Вперед
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SearchResults;