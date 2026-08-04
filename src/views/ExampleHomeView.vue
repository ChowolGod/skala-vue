<script setup>
import ExampleCard from '../components/examples/ExampleCard.vue'

const examples = [
  {
    title: 'v-bind',
    description: '속성 바인딩 예제',
    path: '/examples/v-bind',
  },
  {
    title: 'v-model',
    description: '양방향 데이터 바인딩',
    path: '/examples/v-model',
  },
  {
    title: 'Composition API',
    description: 'ref, computed, watch 예제',
    path: '/examples/composition',
  },
]
</script>

<template>
  <div>
    <h1>Vue 예제 모음</h1>

    <ExampleCard v-for="example in examples" :key="example.title" :example="example" />
  </div>
</template>
