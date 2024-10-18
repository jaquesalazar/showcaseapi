import React, { useState } from 'react';
import '../styles/Input.css'; 
const Input = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(city); 
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Ingresa una ciudad" 
        className="city-input"
      />
      <button type="submit" className="submit-button">Buscar</button>
    </form>
  );
};

export default Input;
