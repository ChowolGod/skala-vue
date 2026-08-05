import axios from 'axios'

// 도시명 → 좌표
export const getGeoLocation = (cityName) => {
  return axios.get('https://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: cityName,
      country: 'KR',
      limit: 1,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
    },
  })
}

// 좌표 → 날씨
export const getWeatherByLocation = (lat, lon) => {
  return axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat,
      lon,
      appid: import.meta.env.VITE_WEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
    },
  })
}
