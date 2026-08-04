<script setup>
import { computed } from 'vue'

const props = defineProps({
  temperature: {
    type: Number,
    required: true,
  },
})

const isHot = computed(() => props.temperature >= 25)
</script>

<template>
  <p :class="isHot ? 'hot' : 'cool'">
    {{ isHot ? '🔥 더움' : '❄️ 선선함' }}
  </p>
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
</style>
