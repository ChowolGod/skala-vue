<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1>😢 페이지를 찾을 수 없습니다.</h1>

    <p>요청하신 페이지가 존재하지 않습니다.</p>

    <button @click="goHome">홈으로 이동</button>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

button {
  margin-top: 20px;

  padding: 10px 20px;

  cursor: pointer;
}
</style>
