const {
  faSun,
  faWind,
  faCloud,
  faDroplet,
} = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const IconWeather = ({ weather }) => {
  const weatherIconMap = {
    sunny: faSun,
    windy: faWind,
    cloudy: faCloud,
    rain: faDroplet,
  };

  return (
    <div>
      {weatherIconMap[weather] && (
        <FontAwesomeIcon
          className="input-icon"
          icon={weatherIconMap[weather]}
        />
      )}
    </div>
  );
};

export default IconWeather;
