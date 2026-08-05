<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <div class="logo">🌱 Vue Playground</div>

    <div class="menu">
      <RouterLink to="/"> Home </RouterLink>

      <RouterLink to="/weather"> 🌤 Weather </RouterLink>

      <RouterLink to="/practice"> 📚 Practice </RouterLink>

      <RouterLink to="/about"> 👤 About </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  height: 64px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 32px;

  background: white;

  border-bottom: 1px solid #e2e8f0;

  position: sticky;

  top: 0;

  z-index: 100;
}

.logo {
  font-size: 20px;

  font-weight: 700;

  color: #1e293b;
}

.menu {
  display: flex;

  gap: 10px;
}

.menu a {
  padding: 8px 16px;

  border-radius: 10px;

  text-decoration: none;

  color: #64748b;

  font-weight: 500;

  transition: 0.2s;
}

.menu a:hover {
  background: #f1f5f9;

  color: #2563eb;
}

.menu a.router-link-active {
  background: #eff6ff;

  color: #2563eb;

  font-weight: 700;
}
</style>
