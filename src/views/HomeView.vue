<script setup>
import AppCard from '@/components/ui/AppCard.vue'
</script>

<template>
  <div class="home-page">
    <!-- Header -->
    <header class="page-header">
      <h1>🌱 Vue Learning Playground</h1>

      <p>Vue3 학습 예제와 프로젝트를 정리한 공간입니다.</p>
    </header>

    <!-- 카드 영역 -->
    <div class="home-grid">
      <AppCard title="👤 About">
        <p>Vue 학습 과정과 프로젝트 목적을 소개하는 페이지입니다.</p>

        <div class="tech-list">
          <span>Vue3</span>
          <span>Vite</span>
          <span>JavaScript</span>
        </div>
      </AppCard>
      <AppCard title="📚 Practice">
        <p>Vue 기본 문법부터 Composition API, Router, Pinia, Axios 예제를 확인할 수 있습니다.</p>

        <div class="tech-list">
          <span>Vue Basics</span>
          <span>Composition API</span>
          <span>Router</span>
          <span>Pinia</span>
          <span>Axios</span>
        </div>
      </AppCard>

      <AppCard title="🌤 Weather">
        <p>OpenWeatherMap API를 활용한 실제 날씨 데이터 연동 프로젝트입니다.</p>

        <div class="tech-list">
          <span>Axios</span>
          <span>API</span>
          <span>Pinia</span>
          <span>LocalStorage</span>
        </div>
      </AppCard>
    </div>
  </div>
</template>
<style scoped>
.home-page {
  min-height: 100vh;

  padding: 32px;

  background: #f8fafc;
}

/* 상단 제목 */
.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  margin: 0;

  font-size: 36px;

  font-weight: 700;

  color: #1e293b;
}

.page-header p {
  margin-top: 10px;

  color: #64748b;

  font-size: 16px;
}

/* 카드 배치 */
.home-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 24px;
}

/* 기술 태그 */
.tech-list {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 20px;
}

.tech-list span {
  padding: 6px 12px;

  border-radius: 999px;

  background: #eff6ff;

  color: #2563eb;

  font-size: 14px;

  font-weight: 600;
}
</style>
