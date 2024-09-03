import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError('Unable to fetch weather data.');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
