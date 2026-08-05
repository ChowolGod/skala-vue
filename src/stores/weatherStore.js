import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const cities = ref([])

  const addCity = (city) => {
    const exists = cities.value.some((item) => item.id === city.id)

    if (!exists) {
      cities.value.push(city)
    }
  }

  const removeCity = (id) => {
    cities.value = cities.value.filter((city) => city.id !== id)
  }

  return {
    cities,
    addCity,
    removeCity,
  }
})
