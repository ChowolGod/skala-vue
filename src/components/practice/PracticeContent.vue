<script setup>
import { computed } from 'vue'

const props = defineProps({
  example: Object,
})

const currentComponent = computed(() => props.example.component)
</script>

<template>
  <main class="content">
    <div class="example-header">
      <h2>
        {{ example.title }}
      </h2>
    </div>

    <div class="example-card">
      <component :is="currentComponent" />
    </div>
  </main>
</template>

<style scoped>
.content {
  flex: 1;

  padding: 32px;

  overflow-y: auto;

  background: #f8fafc;
}

.example-header h2 {
  margin-top: 0;

  margin-bottom: 20px;

  font-size: 26px;
}

.example-card {
  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 16px;

  padding: 28px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
