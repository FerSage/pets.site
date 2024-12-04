import React, { useState } from "react";
import CatImage from "../image/Cat.jpg";
import GoatImage from "../image/Goat.jpg";
import DogImage from "../image/Dog.jpg";
import HomyakImage from "../image/homyak.jpg";
import HorseImage from "../image/horse.webp";
import KrokoImage from "../image/kroko.webp";
import KrolikImage from "../image/krolik.webp";
import BirdImage from "../image/bird.webp";
import NinjiaImage from "../image/ninjia.jpg";
import "../css/Search.css";

const Search = () => {
    const ads = [
      {
        id: 2,
        kind: 'Кошка',
        description: 'Очень пушистая и ласковая.',
        chipNumber: 'ca-001-spb',
        region: 'Центральный',
        date: '14-03-2022',
        image: CatImage
      },
      {
        id: 3,
        kind: 'Коза',
        description: 'Пуховая коза с белой шерстью.',
        chipNumber: 'go-011-spb',
        region: 'Центральный',
        date: '14-03-2022',
        image: GoatImage
      },
      {
        id: 1,
        kind: 'Собака',
        description: 'Добрая собака с рыжей шерстью.',
        chipNumber: 'do-012-spb',
        region: 'Центральный',
        date: '22-07-2023',
        image: DogImage
      },
      {
        id: 4,
        kind: 'Попугай',
        description: 'Попугай с яркими перьями.',
        chipNumber: 'pa-005-spb',
        region: 'Василиостровский',
        date: '05-06-2021',
        image: BirdImage
      },
      {
        id: 5,
        kind: 'Крокодил',
        description: 'Экзотический крокодил.',
        chipNumber: 'cr-009-spb',
        region: 'Петроградский',
        date: '12-07-2023',
        image: KrokoImage
      },
      {
        id: 6,
        kind: 'Кролик',
        description: 'Маленький белый кролик.',
        chipNumber: 'kr-002-spb',
        region: 'Адмиралтейский',
        date: '22-03-2022',
        image: KrolikImage
      },
      {
        id: 7,
        kind: 'Черепаха',
        description: 'Маленькая черепаха с зелёным панцирем.',
        chipNumber: 'tu-008-spb',
        region: 'Петроградский',
        date: '17-10-2023',
        image: NinjiaImage
      },
      {
        id: 8,
        kind: 'Хомяк',
        description: 'Хомяк с пушистыми лапками.',
        chipNumber: 'ha-003-spb',
        region: 'Василиостровский',
        date: '14-08-2023',
        image: HomyakImage
      },
      {
        id: 9,
        kind: 'Лошадь',
        description: 'Мощная и красивая лошадь.',
        chipNumber: 'ho-014-spb',
        region: 'Калининский',
        date: '01-11-2023',
        image: HorseImage
      }
    ];
  
    const [filteredAds, setFilteredAds] = useState(ads);
  
    const searchAds = () => {
      const region = document.getElementById('regionInput').value.trim();
      const animalkind = document.getElementById('animalkindInput').value.trim().toLowerCase();
      const newFilteredAds = ads.filter(ad => {
        const matchesRegion = region ? ad.region === region : true;
        const matcheskind = animalkind ? ad.kind.toLowerCase().includes(animalkind) : true;
        return matchesRegion && matcheskind;
      });
      setFilteredAds(newFilteredAds);
    };
  
    return (
      <div>
        <header>
          <h1>Поиск объявлений о потерянных животных</h1>
        </header>
  
        <main>
          <div className="search-box">
            <h3>Поиск</h3>
            <input kind="text" id="regionInput" placeholder="Район" />
            <input kind="text" id="animalkindInput" placeholder="Вид животного" />
            <button onClick={searchAds}>Найти</button>
          </div>
  
          <div id="adsContainer">
            {filteredAds.length === 0 ? (
              <p>Объявлений не найдено.</p>
            ) : (
              <div className="ads-grid">
                {filteredAds.map(ad => (
                  <div key={ad.id} className="ad-card">
                    <img src={ad.image} alt={ad.kind} />
                    <p><strong>ID:</strong> {ad.id}</p>
                    <p><strong>Вид животного:</strong> {ad.kind}</p>
                    <p><strong>Описание:</strong> {ad.description}</p>
                    <p><strong>Номер чипа:</strong> {ad.chipNumber}</p>
                    <p><strong>Район:</strong> {ad.region}</p>
                    <p><strong>Дата:</strong> {ad.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };
  
  export default Search;