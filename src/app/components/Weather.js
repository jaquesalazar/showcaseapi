import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Input.css'; 

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'dff5fbd7e213a44b6bc621c4194877f2'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
        setError(null); 
      } catch (err) {
        setError(err.message);
        setWeatherData(null); 
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <div className="weather-error">Error: {error}</div>;
  if (!weatherData) return <div className="weather-loading">Cargando...</div>;

  return (
    <div className="weather-container">
      <h2 className="weather-title">Clima en {weatherData.name}</h2>
      <div className="weather-info">
        <img 
          className="weather-icon" 
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
          alt={weatherData.weather[0].description} 
        />
        <div className="weather-details">
          <p className="temperature">{weatherData.main.temp} °C</p>
          <p className="description">{weatherData.weather[0].description}</p>
          <p className="humidity">Humedad: {weatherData.main.humidity}%</p>
          <p className="wind">Viento: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
