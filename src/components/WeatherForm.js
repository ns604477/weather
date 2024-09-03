import React, { useState } from 'react';

const WeatherForm = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="city">Enter City:</label>
        <input
          type="text"
          id="city"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
