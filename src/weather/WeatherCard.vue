<script setup>
defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-city', 'show-detail'])

const select = () => {
  emit('select-city')
}

const showDetail = () => {
  emit('show-detail')
}
</script>

<template>
  <div class="weather-card" @click="select">
    <div class="card-header">
      <h3>{{ city.name }}</h3>

      <button @click.stop="showDetail">상세보기</button>
    </div>

    <p>현재 기온: {{ city.temperature }}℃</p>

    <p>날씨: {{ city.weather }}</p>

    <p :class="city.temperature >= 25 ? 'hot' : 'cool'">
      {{ city.temperature >= 25 ? '🔥 더움 (25도 이상)' : '❄️ 선선함 (25도 미만)' }}
    </p>

    <button @click="select">선택</button>
  </div>
</template>

<style scoped>
.hot {
  color: #e53935;
  font-weight: bold;
}

.cool {
  color: #1e88e5;
  font-weight: bold;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
}

.card-header h3 {
  margin: 0;
}

.card-header button {
  padding: 6px 12px;
}

.weather-card {
  padding: 15px;

  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
