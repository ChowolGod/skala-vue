<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import SearchBar from '../components/exercise/SearchBar.vue'
import WeatherCard from '../components/exercise/WeatherCard.vue'
import BaseDashboardCard from '../components/exercise/BaseDashboardCard.vue'
import { cities } from '../data/weather.js'

const router = useRouter()
// 날씨 데이터

// 검색어
const searchQuery = ref('')

// 선택한 도시
const selectedCity = ref(null)

// 검색 결과
const filteredCities = computed(() => {
  return cities.filter((city) => city.name.includes(searchQuery.value))
})

// 도시 선택
const selectCity = (city) => {
  selectedCity.value = city
  statusMessage.value = `${city.name}이(가) 선택되었습니다.`
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

watchEffect(() => {
  console.log(`현재 검색어: ${searchQuery.value}`)
})
</script>

<template>
  <div class="weather-page">
    <h1>🌤 날씨 현황</h1>

    <!-- 검색 영역 -->
    <BaseDashboardCard title="도시 검색">
      <SearchBar :query="searchQuery" @update-query="updateSearchQuery" />
      <p class="search-status">
        🔍 현재 검색어 :
        <span>{{ searchQuery || '없음' }}</span>
      </p>
    </BaseDashboardCard>

    <!-- 날씨 목록 -->
    <BaseDashboardCard title="지역별 날씨 현황">
      <div class="weather-list">
        <WeatherCard
          v-for="city in filteredCities"
          :key="city.id"
          :city="city"
          @select-city="selectCity(city)"
          @show-detail="showDetail(city)"
        />
      </div>
    </BaseDashboardCard>

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
  width: 100%;
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
</style>
