<script setup>
defineProps({
  query: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-query', 'search'])
</script>

<template>
  <div class="search-box">
    <input
      :value="query"
      @input="emit('update-query', $event.target.value)"
      @keyup.enter="emit('search')"
      placeholder="도시 이름을 입력하세요 (예: Seoul, Busan, Suwon)"
    />
    <button @click="emit('search')">검색</button>
  </div>
</template>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;
}

input {
  flex: 1; /* 남는 공간을 모두 차지 */
  padding: 10px;
}

button {
  padding: 10px 18px;
  white-space: nowrap; /* '검색' 글자가 줄바꿈되지 않도록 */
}
</style>
