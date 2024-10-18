"use client"; 

import React, { useState } from 'react';
import Weather from './components/Weather';
import Input from './components/Input';
import Joke from './components/Joke';
import SpaceX from './components/SpaceX';

import './styles/Page.css'; 

const Home = () => {
  const [city, setCity] = useState('Chihuahua');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      
      <h1 className="app-title">Componente 1</h1>
      <Input onCityChange={handleCityChange} />
      <Weather city={city} />

      <hr className="section-divider" />

      <h1 className="app-title">Componente 2</h1> 
      <Joke />

      <hr className="section-divider" />

      <h1 className="app-title">Componente 3</h1> 
      <SpaceX />
    </div>
  );
};

export default Home; 
