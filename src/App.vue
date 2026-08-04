<script setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" active-class="active"> 🌤 날씨 </RouterLink>

      <RouterLink to="/about" active-class="active"> 📖 소개 </RouterLink>
    </nav>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #ddd;
}

.nav {
  display: flex;
  gap: 20px;

  padding: 16px 24px;
}

.nav a {
  text-decoration: none;

  color: #555;

  font-size: 16px;
}

.nav a:hover {
  color: #2563eb;
}

.nav a.active {
  color: #2563eb;

  font-weight: bold;
}

.main-content {
  width: 100%;

  padding: 24px;
}
</style>
