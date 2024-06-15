import '../../global.css';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AnimalCard = ({ animalName, animalImg, animalText }) => {
  return (
    <div className="card">
      <div className="card_container">
        <img class="img_animal" src={animalImg} alt="Animal"></img>
        <h3 className="card_title">{animalName}</h3>

        <p className="info_animal">{animalText}</p>
      </div>
    </div>
  );
};
