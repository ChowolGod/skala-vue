<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/configStore'
import WeatherStatus from './WeatherStatus.vue'

const configStore = useConfigStore()

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-city', 'show-detail', 'remove-city'])

const select = () => {
  emit('select-city')
}

const showDetail = () => {
  emit('show-detail')
}

const displayTemp = computed(() => {
  const rawTemp = props.city.temperature

  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }

  return rawTemp
})
</script>

<template>
  <div class="weather-card" @click="select">
    <div class="card-header">
      <h3>{{ city.name }}</h3>

      <button @click.stop="showDetail">상세보기</button>
    </div>

    <p>
      현재 기온:
      {{ displayTemp }}{{ configStore.unitSymbol }}
    </p>

    <p>날씨: {{ city.weather }}</p>

    <WeatherStatus :temperature="city.temperature" />

    <button @click="select">선택</button>
    <button @click.stop="emit('remove-city')">삭제</button>
  </div>
</template>

<style scoped>
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
