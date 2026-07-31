<script setup>
import { ref } from 'vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

const searchText = ref('')
const selectedCity = ref('')

const handleInput = (event) => {
  searchText.value = event.target.value
}

const selectCity = (cityName) => {
  selectedCity.value = `${cityName}이 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.search-result,
.status-bar {
  margin: 10px 0;
}

.weather-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.card h2 {
  margin-top: 0;
}

button {
  padding: 8px 12px;
}

.hot {
  color: red;
}

.cool {
  color: blue;
}
</style>

<template>
  <div class="container">
    <div class="container">
      <h1>지역별 날씨 현황</h1>

      <!-- 검색 -->
      <input :value="searchText" @input="handleInput" placeholder="도시명을 입력하세요" />

      <p>입력한 도시 : {{ searchText }}</p>

      <hr />

      <!-- 상태바 -->
      <p>{{ selectedCity }}</p>
    </div>

    <!-- 카드 -->
    <div class="weather-list">
      <div v-for="city in weatherList" :key="city.id" class="card" @click="selectCity(city.name)">
        <h2>{{ city.name }}</h2>

        <p>{{ city.temp }}℃</p>

        <p>{{ city.status }}</p>

        <p v-if="city.temp >= 25">🔥 더움 (25도 이상)</p>

        <p v-else>❄️ 선선함 (25도 미만)</p>

        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>
    </div>
  </div>
</template>
