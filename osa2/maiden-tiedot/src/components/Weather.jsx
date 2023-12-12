import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country.capital}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.current);
        setWeather(data);
      });
  }, []);

  return (
    <>
      {weather && (
        <div className="weather">
          <h3>Weather in {country.capital}</h3>
          <p>
            temperature {weather.current.temp_c}'C (feels like
            {` ${weather.current.feelslike_c}`}'C)
          </p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
          <p>wind {weather.current.wind_kph} kph</p>
        </div>
      )}
    </>
  );
};
export default Weather;
