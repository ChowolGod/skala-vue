<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useConfigStore } from '@/stores/configStore'
import { cities } from '../data/weather'
import WeatherStatus from '@/components/exercise/WeatherStatus.vue'

const route = useRoute()
const router = useRouter()

const configStore = useConfigStore()

// URL의 cityId 가져오기
const cityId = Number(route.params.cityId)

// 해당 도시 찾기
const city = computed(() => {
  return cities.find((city) => city.id === cityId)
})

// 홈으로 이동
const goHome = () => {
  router.push('/')
}

// 이전 페이지 이동
const goBack = () => {
  router.back()
}

const displayTemp = computed(() => {
  if (!city.value) {
    return null
  }

  const temp = city.value.temperature

  if (configStore.unit === 'fahrenheit') {
    return Math.round((temp * 9) / 5 + 32)
  }

  return temp
})
</script>

<template>
  <!-- 도시가 존재하는 경우 -->
  <div v-if="city" class="detail-page">
    <h1>{{ city.name }} 날씨 상세 정보</h1>

    <div class="weather-detail">
      <p>
        현재 기온:
        {{ displayTemp }}{{ configStore.unitSymbol }}
      </p>

      <p>
        🌤 날씨:
        {{ city.weather }}
      </p>

      <WeatherStatus :temperature="city.temperature" />
    </div>

    <button @click="goBack">이전 페이지</button>

    <button @click="goHome">홈으로 이동</button>
  </div>

  <!-- 도시가 없는 경우 -->
  <div v-else class="not-found">
    <h1>❌ 존재하지 않는 도시입니다.</h1>

    <p>올바른 도시를 선택해주세요.</p>

    <button @click="goHome">홈으로 돌아가기</button>
  </div>
</template>

<style scoped>
.detail-page,
.not-found {
  padding: 30px;
}

.weather-detail {
  margin: 20px 0;
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;
}

button {
  margin-right: 10px;

  padding: 8px 14px;

  cursor: pointer;
}
</style>
