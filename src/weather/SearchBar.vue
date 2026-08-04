<script setup>
defineProps({
  query: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-query'])

const handleInput = (event) => {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div class="search-box">
    <input :value="query" @input="handleInput" placeholder="검색할 도시를 입력하세요" />
  </div>
</template>

<style scoped>
.search-box {
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;
}
</style>
