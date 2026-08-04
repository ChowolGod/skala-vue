<script setup>
defineProps({
  example: Object,
})
</script>

<template>
  <div class="example-card">
    <h3>
      {{ example.title }}
    </h3>

    <p>
      {{ example.description }}
    </p>

    <RouterLink :to="example.path"> 보기 </RouterLink>
  </div>
</template>
