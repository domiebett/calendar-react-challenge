const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/";
const API_KEY = process.env.REACT_APP_VISUALCROSSING_API_KEY;

const getWeatherApiUrl = (cityName, date) => {
  return `${BASE_URL}timeline/${cityName}/${date}/${date}?unitGroup=metric&key=${API_KEY}&contentType=json`;
};

export const fetchWeather = (cityName, date) => {
  return fetch(getWeatherApiUrl(cityName, date)).then((response) =>
    response.json()
  );
};
