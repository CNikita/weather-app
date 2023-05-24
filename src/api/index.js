import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_API_KEY

const httpClient = axios.create({ baseURL: API_URL })
httpClient.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['appid'] = API_KEY;
  return config;
});

const getCoordinatesByCityName = (cityName = "Kazan") => {
  return httpClient.get(`/geo/1.0/direct?q=${cityName}&limit=1`)
}

const getWeatherByCityName = (cityName) => {
  return httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru`)
}

const getForecastByCityName = (cityName) => {
  return httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=50&units=metric&lang=ru`)
}

export default {
  getCoordinatesByCityName,
  getWeatherByCityName,
  getForecastByCityName
}