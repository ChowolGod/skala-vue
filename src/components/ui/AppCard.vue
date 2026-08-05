<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="card">
    <h2 v-if="title">
      {{ title }}
    </h2>

    <div class="card-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.card {
  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 16px;

  padding: 24px;

  margin-bottom: 24px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card h2 {
  margin-top: 0;

  margin-bottom: 20px;

  font-size: 20px;

  color: #1e293b;
}

.card-content {
  width: 100%;
}
</style>
