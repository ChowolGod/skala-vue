<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleGoHome = () => {
  router.push('/')
}
const handleLoginRedirect = () => {
  router.replace('/')
}
const handleAdvancedMove = () => {
  router.push({
    name: 'WeatherDetail',
    params: {
      cityId: 1835848,
    },
    query: {
      from: 'practice',
    },
  })
}
const handleGoBack = () => {
  router.go(-1) // 💡 1단계 이전 주소 기록으로 Back
}
</script>
<template>
  <button @click="handleGoHome">일반 홈 이동 (push)</button>
  <button @click="handleLoginRedirect">인증 만료! 강제 리다이렉트 (replace)</button>
  <button @click="handleAdvancedMove">고급 파라미터 이동</button>
  <button @click="handleGoBack">이전 화면으로</button>
</template>
