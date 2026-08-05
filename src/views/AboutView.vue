<script setup>
import AppCard from '@/components/ui/AppCard.vue'
</script>

<template>
  <div class="about-page">
    <header class="page-header">
      <h1>👤 About</h1>

      <p>Vue Learning Playground 프로젝트 소개</p>
    </header>

    <AppCard title="🌱 프로젝트 소개">
      <p>Vue3 학습 과정에서 작성한 예제와 프로젝트를 하나의 공간에 정리한 사이트입니다.</p>

      <p>
        Vue 기본 문법부터 Composition API, Router, Pinia, Axios 활용까지 단계별로 확인할 수
        있습니다.
      </p>
    </AppCard>

    <AppCard title="🛠 사용 기술">
      <div class="tech-list">
        <span>Vue 3</span>

        <span>Vite</span>

        <span>Vue Router</span>

        <span>Pinia</span>

        <span>Axios</span>

        <span>OpenWeatherMap API</span>
      </div>
    </AppCard>

    <AppCard title="📚 프로젝트 구성">
      <ul>
        <li>Home : 프로젝트 소개 및 이동</li>

        <li>Weather : 실제 날씨 API 연동 프로젝트</li>

        <li>Practice : Vue 학습 예제 모음</li>

        <li>About : 프로젝트 설명</li>
      </ul>
    </AppCard>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;

  padding: 32px;

  background: #f8fafc;
}

.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  margin: 0;

  font-size: 36px;

  color: #1e293b;
}

.page-header p {
  margin-top: 10px;

  color: #64748b;
}

.tech-list {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.tech-list span {
  padding: 8px 14px;

  border-radius: 999px;

  background: #eff6ff;

  color: #2563eb;

  font-weight: 600;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
