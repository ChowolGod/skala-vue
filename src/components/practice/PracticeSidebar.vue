<script setup>
import { ref } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['select'])

// 열려있는 메뉴 관리
const opened = ref([props.categories[0]?.id])

// 메뉴 열기/닫기
const toggleCategory = (id) => {
  if (opened.value.includes(id)) {
    opened.value = opened.value.filter((item) => item !== id)
  } else {
    opened.value.push(id)
  }
}

// 열려있는지 확인
const isOpen = (id) => {
  return opened.value.includes(id)
}
</script>

<template>
  <aside class="sidebar">
    <div v-for="category in categories" :key="category.id" class="category">
      <!-- 카테고리 버튼 -->

      <button class="category-title" @click="toggleCategory(category.id)">
        <span>
          {{ isOpen(category.id) ? '▼' : '▶' }}
        </span>

        <span>
          {{ category.icon }}

          {{ category.title }}
        </span>
      </button>

      <!-- 예제 목록 -->

      <div v-if="isOpen(category.id)" class="example-list">
        <button
          v-for="example in category.examples"
          :key="example.id"
          class="example-button"
          @click="emit('select', example)"
        >
          {{ example.title }}
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;

  height: 100%;

  padding: 20px;

  overflow-y: auto;

  background: white;

  border-right: 1px solid #e2e8f0;
}

.category {
  margin-bottom: 12px;
}

.category-title {
  display: flex;

  align-items: center;

  gap: 8px;

  width: 100%;

  padding: 12px;

  border: none;

  border-radius: 10px;

  background: #f8fafc;

  font-size: 16px;

  font-weight: 700;

  cursor: pointer;

  text-align: left;

  transition: 0.2s;
}

.category-title:hover {
  background: #eff6ff;

  color: #2563eb;
}

.example-list {
  margin-top: 8px;

  padding-left: 12px;

  border-left: 2px solid #e2e8f0;
}

.example-button {
  display: block;

  width: 100%;

  padding: 8px 12px;

  margin-bottom: 4px;

  border: none;

  border-radius: 8px;

  background: white;

  text-align: left;

  cursor: pointer;

  color: #475569;
}

.example-button:hover {
  background: #eff6ff;

  color: #2563eb;
}
</style>
