<script setup>
import { ref, computed } from 'vue'

// 날씨 데이터
const cities = ref([
  {
    id: 1,
    name: '서울',
    weather: '맑음',
    temperature: 28,
    status: '더움',
  },
  {
    id: 2,
    name: '수원',
    weather: '비',
    temperature: 24,
    status: '선선함',
  },
  {
    id: 3,
    name: '부산',
    weather: '구름',
    temperature: 26,
    status: '보통',
  },
])

// 검색어
const searchQuery = ref('')

// 선택한 도시
const selectedCity = ref(null)

// 검색 결과
const filteredCities = computed(() => {
  return cities.value.filter((city) => city.name.includes(searchQuery.value))
})

// 도시 선택
const selectCity = (city) => {
  selectedCity.value = city
}
</script>

<template>
  <div class="weather-page">
    <h1>🌤 날씨 현황</h1>

    <!-- 검색 영역 -->
    <div class="search-box">
      <h2>도시 검색</h2>

      <input v-model="searchQuery" placeholder="검색할 도시 입력" />

      <p>
        검색 중:
        {{ searchQuery }}
      </p>
    </div>

    <!-- 날씨 목록 -->
    <div class="weather-list">
      <h2>지역별 날씨 현황</h2>

      <div v-for="city in filteredCities" :key="city.id" class="weather-card">
        <h3>
          {{ city.name }}
        </h3>

        <p>
          현재 기온:
          {{ city.temperature }}℃
        </p>

        <p>
          날씨:
          {{ city.weather }}
        </p>

        <p>
          상태:
          {{ city.status }}
        </p>

        <button @click="selectCity(city)">선택</button>
      </div>
    </div>

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
</style>
