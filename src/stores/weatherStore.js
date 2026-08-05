import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const cities = ref(JSON.parse(localStorage.getItem('weatherCities')) || [])

  const saveCities = () => {
    localStorage.setItem('weatherCities', JSON.stringify(cities.value))
  }
  const addCity = (city) => {
    const exists = cities.value.some((item) => item.id === city.id)

    if (exists) {
      return false
    }

    cities.value.push(city)

    saveCities()

    return true
  }

  const removeCity = (id) => {
    cities.value = cities.value.filter((city) => city.id !== id)

    saveCities()
  }

  return {
    cities,
    addCity,
    removeCity,
  }
})
