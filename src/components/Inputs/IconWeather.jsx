import { useEffect, useState } from "react";

import { weatherIcons } from "assets";
import PropTypes from "prop-types";
import { fetchWeather } from "services/Api/WeatherApi";

const IconWeather = ({ city, date, time }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const cityName = city.name;
    const apiDate = date.format("YYYY-MM-DD");
    const hour = time.get("hour");

    return fetchWeather(cityName, apiDate)
      .then((result) => {
        const weather = result.days[0]["hours"][hour];
        setWeather(weather);
      })
      .catch(() => {
        setWeather(null);
      });
  }, [city, date, time]);

  return (
    <>
      {!weather && <div>Weather not found.</div>}
      {weather && (
        <div className="icon-weather">
          <div className="weather-icon">
            <img src={weatherIcons[weather["icon"]]} alt={"cloudy"} />
          </div>

          <div className="temp">
            <span>{weather["conditions"]}</span>
            <br></br>
            <span>Temp: {weather["temp"]}</span>
          </div>
        </div>
      )}
    </>
  );
};

IconWeather.propTypes = {
  city: PropTypes.instanceOf(Object).isRequired,
  date: PropTypes.instanceOf(Object).isRequired,
  time: PropTypes.instanceOf(Object).isRequired,
};

export default IconWeather;
