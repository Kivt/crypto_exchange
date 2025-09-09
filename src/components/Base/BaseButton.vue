<template>
  <button :disabled="isLoading" class="base-button">
    <span :style="{ opacity: isLoading ? '0' : '100' }">
      <slot></slot>
    </span>
    <span v-show="isLoading" class="base-button__loading">Loading...</span>
  </button>
</template>

<script setup lang="ts">
const { isLoading } = defineProps<{ isLoading: boolean }>()
</script>

<style scoped>
button {
  background-color: transparent;
  border: 1px solid var(--link-color);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.25s;
  color: var(--link-color);
}

button:hover {
  background-color: var(--link-hover-color);
}
</style>

<style scoped>
.base-button {
  position: relative;
}

.base-button__loading {
  color: var(--link-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
