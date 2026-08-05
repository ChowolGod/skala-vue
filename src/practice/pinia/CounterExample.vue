<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="pinia-example">
    <h2>Pinia 예제</h2>

    <p>
      카운트:
      {{ counter.count }}
    </p>

    <p>
      카운트 × 2:
      {{ counter.doubleCount }}
    </p>

    <button @click="counter.increment">카운트 증가</button>
  </div>
</template>

<style scoped>
.pinia-example {
  padding: 20px;

  border: 1px solid #ddd;

  border-radius: 10px;
}

button {
  padding: 8px 14px;

  cursor: pointer;
}
</style>
