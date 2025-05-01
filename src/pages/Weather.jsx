import { React ,useState } from 'react';
import GoogleMapCompnent from '../components/GoogleMapCompnent';

const weatherApiKey='c98c1d11f7f9e85a8d4112bffc57d9b1';

const Weather = ()=> {

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleMapClick = async (e) => {
    
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    // alert(lat);
    setSelectedLocation({ lat, lng });
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`
      );
      const data = await response.json();
     //  setWeather(data);
    } catch (err) {
      console.error(err);
     //  setError('Failed to fetch weather data.');
    }
    // setLoading(false);
  };

    return (
      <section className="section light-background"> 
        <div className="container section-title" data-aos="fade-up">
        <h2>Weather</h2>
        <p>*****</p>
      </div>
      {loading && (
        <div className="spinner-border text-primary mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {weather && weather.main && !loading && (
        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{weather.name || 'Unknown Location'}</h2>
            <h4 className="card-subtitle mb-2 text-muted">{weather.weather[0].main}</h4>
            <p className="card-text">Temperature: {weather.main.temp}°C</p>
            <p className="card-text">Humidity: {weather.main.humidity}%</p>
            <p className="card-text">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
      <GoogleMapCompnent propMapClick={handleMapClick} />
      </section>
    )

};

export default Weather;