<script setup>
import { useConfigStore } from '@/stores/configStore'

const configStore = useConfigStore()
</script>

<template>
  <div class="unit-toggler">
    <span>
      날씨 단위 :
      <strong>{{ configStore.unitSymbol }}</strong>
    </span>

    <button @click="configStore.toggleUnit()">단위 변경</button>
  </div>
</template>

<style scoped>
.unit-toggler {
  display: flex;
  align-items: center;
  gap: 12px;
}

.unit-toggler strong {
  color: #2563eb;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>
