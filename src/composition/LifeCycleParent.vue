<script setup>
import { ref } from 'vue'
import LifeCycleChild from './LifeCycleChild.vue'

const isVisible = ref(true)
</script>

<template>
  <h1>Lifecycle Hook</h1>

  <button @click="isVisible = !isVisible">🔴 실습 컴포넌트 파괴하기 (v-if="false")</button>

  <hr />

  <LifeCycleChild v-if="isVisible" />
</template>
