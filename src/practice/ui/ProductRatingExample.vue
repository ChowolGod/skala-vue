<script setup>
import { ref } from 'vue'
import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'

const productQuantity = ref(1)
const productRate = ref(4)
</script>

<template>
  <BaseDashboardCard title="🛒 커머스 상품 수량 및 평점 시스템">
    <div class="product-area">
      <div class="section">
        <label> 구매 수량 선택 </label>

        <el-input-number v-model="productQuantity" :min="1" :max="10" />
      </div>

      <div class="section">
        <label> 상품 만족도 별점 </label>

        <el-rate v-model="productRate" />
      </div>

      <div class="summary">
        🟢 실시간 장부 요약

        <br />

        선택 수량:

        <strong> {{ productQuantity }}개 </strong>

        <br />

        내가 준 점수:

        <strong> {{ productRate }}점 </strong>
      </div>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
.product-area {
  display: flex;

  flex-direction: column;

  gap: 25px;
}

.section {
  display: flex;

  align-items: center;

  gap: 20px;
}

label {
  font-weight: bold;

  width: 120px;
}

.summary {
  padding: 15px;

  border-radius: 10px;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  line-height: 1.8;
}
</style>
