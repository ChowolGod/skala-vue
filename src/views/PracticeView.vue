<script setup>
import { ref } from 'vue'

import PracticeSidebar from '@/components/practice/PracticeSidebar.vue'
import PracticeContent from '@/components/practice/PracticeContent.vue'

import practiceList from '@/practice'

const categories = ref(practiceList)

const current = ref(categories.value[0].examples[0])
</script>

<template>
  <div class="practice-page">
    <header class="page-header">
      <h1>📚 Vue Practice</h1>

      <p>Vue3 기본 문법부터 Router, Pinia, Axios까지 단계별 예제를 확인할 수 있습니다.</p>
    </header>

    <div class="practice-layout">
      <PracticeSidebar :categories="categories" :current="current" @select="current = $event" />

      <PracticeContent :example="current" />
    </div>
  </div>
</template>

<style scoped>
.practice-page {
  min-height: 100vh;

  padding: 32px;

  background: #f8fafc;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;

  font-size: 32px;
}

.page-header p {
  margin-top: 8px;

  color: #64748b;
}

.practice-layout {
  display: flex;

  height: calc(100vh - 180px);

  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 16px;

  overflow: hidden;
}
</style>
