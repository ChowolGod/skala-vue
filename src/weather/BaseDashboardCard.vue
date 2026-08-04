<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="dashboard-card">
    <h2>{{ title }}</h2>

    <div class="card-body">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.dashboard-card {
  margin-bottom: 24px;
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;

  background: white;
}

.dashboard-card h2 {
  margin-bottom: 5px;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
