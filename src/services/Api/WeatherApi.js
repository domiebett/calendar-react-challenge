const API_HOST = "http://dataservice.accuweather.com/";
const API_KEY = "AddlSLNxJZ0lsZCAUAjQXnmGlddJhPEI";
const API_VERSION = "v1";

const getLocationApiUrl = (cityName) => {
  return `${API_HOST}locations/${API_VERSION}/cities/search?apikey=${API_KEY}&q=${cityName}`;
};

export const fetchLocations = (cityName) => {
  return fetch(getLocationApiUrl(cityName)).then((response) => response.json());
};
