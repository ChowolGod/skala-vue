<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '../components/exercise/SearchBar.vue'
import WeatherCard from '../components/exercise/WeatherCard.vue'
import AppCard from '@/components/ui/AppCard.vue'
import UnitToggler from '@/components/exercise/UnitToggler.vue'
import { getWeather } from '@/api/weatherApi'
import { onMounted } from 'vue'
import { useWeatherStore } from '@/stores/weatherStore'

const weatherStore = useWeatherStore()
const router = useRouter()
// 날씨 데이터

// 검색어
const searchQuery = ref('')

// 선택한 도시
const selectedCity = ref(null)

// 검색 결과
const filteredCities = computed(() => {
  return weatherStore.cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
// 도시 선택
const selectCity = (city) => {
  selectedCity.value = city
  statusMessage.value = `${city.name}이(가) 선택되었습니다.`
}

const removeCity = (id) => {
  weatherStore.removeCity(id)
}

const updateSearchQuery = (newQuery) => {
  searchQuery.value = newQuery
}

const showDetail = (city) => {
  router.push(`/weather/${city.id}`)
}

const statusMessage = ref('도시를 선택해주세요.')

watch(statusMessage, (newMessage, oldMessage) => {
  console.log('===== 상태바 변경 =====')
  console.log('이전:', oldMessage)
  console.log('현재:', newMessage)
})

watch(searchQuery, () => {
  errorMessage.value = ''
})

watchEffect(() => {
  console.log(`현재 검색어: ${searchQuery.value}`)
})

const loading = ref(false)
const errorMessage = ref('')

const fetchWeather = async (cityName) => {
  loading.value = true // 로딩 시작

  try {
    const response = await getWeather(cityName)

    // 기존 코드
    const city = {
      id: response.data.id,
      name: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description,

      icon: response.data.weather[0].icon,
    }

    weatherStore.addCity(city)

    errorMessage.value = ''

    searchQuery.value = ''
  } catch (error) {
    errorMessage.value = '존재하지 않는 도시입니다.'
    console.error(error)
  } finally {
    loading.value = false // 성공/실패 상관없이 종료
  }
}

onMounted(() => {
  fetchWeather('Seoul')
  fetchWeather('Busan')
  fetchWeather('Suwon')
})
</script>

<template>
  <div class="weather-page">
    <div class="top-menu">
      <h1>🌤 날씨 현황</h1>

      <UnitToggler />
    </div>

    <!-- 검색 영역 -->
    <AppCard title="도시 검색">
      <SearchBar
        :query="searchQuery"
        @update-query="updateSearchQuery"
        @search="fetchWeather(searchQuery)"
      />
      <p class="search-status">
        🔍 현재 검색어 :
        <span>{{ searchQuery || '없음' }}</span>
      </p>
    </AppCard>

    <!-- 날씨 목록 -->
    <AppCard title="지역별 날씨 현황">
      <p v-if="loading" class="loading">🔄 날씨 정보를 불러오는 중입니다...</p>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>

      <div class="weather-list">
        <WeatherCard
          v-for="city in filteredCities"
          :key="city.id"
          :city="city"
          @select-city="selectCity(city)"
          @show-detail="showDetail(city)"
          @remove-city="removeCity(city.id)"
        />
      </div>
    </AppCard>

    <!-- 선택 결과 -->
    <div v-if="selectedCity" class="selected-box">
      <h2>선택한 도시</h2>

      <p>
        도시:
        {{ selectedCity.name }}
      </p>

      <p>
        기온:
        {{ selectedCity.temperature }}℃
      </p>

      <p>
        날씨:
        {{ selectedCity.weather }}
      </p>
    </div>
  </div>
  <div class="status-bar">
    {{ statusMessage }}
  </div>
</template>

<style scoped>
.weather-page {
  background: #f8fafc;

  padding: 32px;

  min-height: 100vh;
}

.top-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.top-menu > :last-child {
  margin-left: auto;
}

.search-box,
.weather-list,
.selected-box {
  margin-top: 20px;
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;

  margin-top: 10px;
}

.weather-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.weather-card {
  padding: 15px;

  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 8px 14px;

  cursor: pointer;
}

.selected-box {
  background: #f0fdf4;
}

.status-bar {
  margin-top: 20px;
  padding: 12px 16px;

  border-radius: 8px;

  background: #eef6ff;
  border: 1px solid #c7defc;
}

.search-status {
  margin-top: 12px;
  padding: 8px 12px;

  background: #f8f9fa;
  border-radius: 6px;
}

.search-status span {
  font-weight: bold;
}

.error-message {
  margin-top: 10px;
  padding: 10px;

  color: #dc2626;
  background: #fee2e2;
  border: 1px solid #fca5a5;
  border-radius: 8px;
}

h1 {
  margin: 0;

  font-size: 36px;

  color: #1e293b;
}
</style>
