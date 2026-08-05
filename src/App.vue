<script setup>
import AppNav from './components/ui/AppNav.vue'
</script>
<template>
  <header>
    <AppNav />
  </header>

  <main>
    <RouterView />
  </main>
</template>
<style scoped>
header {
  background-color: #f5f5f5;
  padding: 10px;
}

nav {
  display: flex;
  gap: 20px;
}
</style>
