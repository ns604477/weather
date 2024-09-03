import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{weather.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{weather.weather[0].main}</h6>
        <p className="card-text">Temperature: {weather.main.temp}°C</p>
        <p className="card-text">Humidity: {weather.main.humidity}%</p>
        <p className="card-text">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
