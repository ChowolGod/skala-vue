<script setup>
import { ref } from 'vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

// 1. 상위 컴포넌트의 로컬 반응형 상태 정의
const message = ref('Parent 초기 메시지')

// 2. 하위 컴포넌트의 커스텀 이벤트를 수신했을 때 실행될 핸들러 함수
// 인자(newValue)로 하위 컴포넌트가 보낸 페이로드가 자동 주입됩니다.
const handleUpdateRequest = (newValue) => {
  message.value = newValue
}
</script>

<template>
  <div class="practice-section">
    <h2>Props & Emits</h2>
    <div class="parent-container">
      <h2>상위 컴포넌트 (Parent)</h2>
      <p>
        현재 로컬 데이터(State): <strong>{{ message }}</strong>
      </p>
      <br />
      <PropsEmitsChild :parent-data="message" @update-request="handleUpdateRequest" />
    </div>
  </div>
</template>

<style scoped>
.practice-section {
  width: 100%;
}

.practice-section > h2 {
  margin-bottom: 24px;
}

/* Parent 영역 */
.parent-container {
  padding: 24px;
  margin-bottom: 24px;

  border: 2px solid #4f46e5;
  border-radius: 12px;

  background: #eef2ff;
}

/* Child 영역 */
.child-container {
  padding: 20px;

  border: 2px solid #16a34a;
  border-radius: 12px;

  background: #f0fdf4;
}

/* 제목 */
h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

/* 데이터 표시 */
p {
  margin: 8px 0;
  line-height: 1.6;
}

/* 버튼 */
button {
  padding: 10px 16px;

  border: none;
  border-radius: 8px;

  background: #2563eb;
  color: white;

  cursor: pointer;

  font-size: 14px;
}

button:hover {
  background: #1d4ed8;
}
</style>
