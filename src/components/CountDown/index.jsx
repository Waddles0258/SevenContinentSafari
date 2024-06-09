import '../../global.css';
import './style.css';
import React, { useState, useEffect } from 'react';

export const CountDown = () => {
  const [isActive, setIsActive] = useState(false);
  const showMap = () => {
    document.getElementById('map__container').classList.remove('hidden');
  };
  return (
    <div className={isActive ? 'hidden' : 'countdown__container container'}>
      <h2 className="countdown__text">
        Let`s explore <br></br>Seven <br></br>Continents Safari
      </h2>
      <div
        onClick={() => {
          setIsActive(true);
          showMap();
        }}
        id="countdown__button--start"
        className={isActive ? null : 'button__play-again'}
      >
        {isActive ? null : 'Start'}
      </div>
    </div>
  );
};
