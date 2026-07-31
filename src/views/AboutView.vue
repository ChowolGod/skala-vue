<script setup>
import { ref } from 'vue'

const message = ref('안녕하세요')

function changeMessage() {
  message.value = 'Vue 반응성!'
}
</script>

<template>
  <p>{{ message }}</p>
  <button @click="changeMessage">변경</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
