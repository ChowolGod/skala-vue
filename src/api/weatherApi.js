import axios from 'axios'

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 5000,
})

export const getWeather = (city) => {
  return weatherApi.get('/weather', {
    params: {
      q: city,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  })
}
