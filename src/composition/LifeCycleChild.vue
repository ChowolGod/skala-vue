<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)
let timerId = null

// 생성 (Creation)
console.log('1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)')

// 부착 (Mounting)
onMounted(() => {
  console.log('2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)')

  timerId = setInterval(() => {
    count.value++
  }, 3000)
})

// 갱신 (Updating)
onUpdated(() => {
  console.log(
    `3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${count.value})`,
  )
})

// 소멸 (Unmounting)
onUnmounted(() => {
  clearInterval(timerId)
  console.log('4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!')
})

// 버튼 클릭 시 수동 증가
const increaseCount = () => {
  count.value++
}
</script>

<template>
  <div class="lifecycle-box">
    <h2>⏱️ 라이프사이클 훅 흐름 탐색기</h2>

    <div class="counter-box">
      <h3>실시간 타이머 카운트: {{ count }}</h3>

      <button @click="increaseCount">수동으로 숫자 올리기</button>
    </div>
  </div>
</template>

<style scoped>
.lifecycle-box {
  margin-top: 20px;
}

.counter-box {
  margin-top: 20px;
  padding: 30px;

  text-align: center;

  border: 1px solid #8be9fd;
  border-radius: 10px;
  background-color: #dff7fb;
}

.counter-box h3 {
  margin-bottom: 16px;
}

button {
  padding: 10px 18px;

  border: 1px solid #ccc;
  border-radius: 6px;

  background: white;
  cursor: pointer;
}

button:hover {
  background: #f3f3f3;
}
</style>
